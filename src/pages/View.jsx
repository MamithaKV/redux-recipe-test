import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { json, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const View = () => {
    const [recipe,setRecipe]=useState({})
    const {id} = useParams()
    console.log(id);
    console.log(recipe);
    

    // const {allRecipes}= useSelector(state=>state.productReducer)
    // console.log(allRecipes);

    useEffect(()=>{
        if(sessionStorage.getItem("allRecipes")){
            const allRecipes = JSON.parse(sessionStorage.getItem("allRecipes"))
        
        console.log(allRecipes.find(item=>item.id==id));
        setRecipe(allRecipes.find(item=>item.id==id))
        }
    },[])
    
  return (
    <>
        <Header/>
        <div style={{paddingTop:'20px'}} className='flex flex-col mx-8'>
           <div className="grid grid-cols-2 items-center">
            <img className='ms-32 mt-4' width={'350px'} height={'250px'} src={recipe?.image}alt="" />
           
             <div>
                <h3 className='text-xl font-semibold'>Recipe ID : {recipe?.id}</h3>
                <h1 className='text-3xl font-semibold '>RecipeName : {recipe?.name}</h1>
               < h4 className='text-xl font-bold '>cuisine : {recipe?.cuisine}</h4>
               <h5 className='text-l'> <span className='font-bold'>prepTimeMinutes</span>: {recipe?.prepTimeMinutes}</h5>
               <h6 className='text-l  '><span className='text-xl font-bold'>ingredients</span> : {recipe?.ingredients}</h6>
               <span className='text-l'><span className='text-xl font-bold'>instruction</span> : {recipe?.instructions}
</span>
         <h3 className='font-bold'>ReviewsCount:{recipe?.reviewCount}</h3>
         
              </div>
              </div>
             </div>
    </>
  )
}

export default View