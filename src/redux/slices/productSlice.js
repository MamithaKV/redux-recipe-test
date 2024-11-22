import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchRecipes = createAsyncThunk("recipes/fetchRecipes",async ()=>{
   const result = await axios.get("https://dummyjson.com/recipes")
  // console.log(result.data.recipes);
  sessionStorage.setItem("allRecipes",JSON.stringify(result.data.recipes))
   return result.data.recipes
})

const productSlice = createSlice({
    name:'recipes',
    initialState:{
        allRecipes:[],
        dummyAllRecipes:[],
        loading:false,
        errorMsg:""

    },
    reducers:{
    searchProduct :(state,actionByHeader)=>{
        state.allRecipes=state.dummyAllRecipes.filter(item=>item.cuisine.toLowerCase().includes(actionByHeader.payload))
    }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchRecipes.fulfilled,(state,resultApi)=>{
        state.allRecipes=resultApi.payload
        state.dummyAllRecipes=resultApi.payload

        state.loading=false
        state.errorMsg=""
        })
      
            builder.addCase(fetchRecipes.pending,(state)=>{
            state.allRecipes=[]
            state.dummyAllRecipes=[]
            state.loading=true
            state.errorMsg=""
            })
            builder.addCase(fetchRecipes.rejected,(state)=>{
                state.allRecipes=[]
                state.dummyAllRecipes=[]
                state.loading=false
                state.errorMsg="api fail"
                })
    }
})
export const {searchProduct}=productSlice.actions
export default productSlice.reducer
