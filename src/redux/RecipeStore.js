import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slices/productSlice'

const RecipeStore =configureStore({
    reducer:{
    productReducer : productSlice
    }
})

export default RecipeStore