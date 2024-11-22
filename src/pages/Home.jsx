import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRecipes } from '../redux/slices/productSlice'

const Home = () => {
    const dispatch = useDispatch()

  const {allRecipes,loading,errorMsg} = useSelector(state=>state.productReducer)
  //console.log(allRecipes,loading,errorMsg);
  const [currentPage,setCurrentPage]=useState(1)
  const recipesPerPage=8
  const totalPages=Math.ceil(allRecipes?.length/recipesPerPage)
  const currentPageRecipeLastIndex = currentPage * recipesPerPage
  const currentPageRecipeFirstIndex = currentPageRecipeLastIndex-recipesPerPage
  const visibleAllRecipes=allRecipes?.slice(currentPageRecipeFirstIndex,currentPageRecipeLastIndex)




    useEffect(()=>{
        dispatch(fetchRecipes())
    },[])

const navigateNextPage=()=>{
    if(currentPage!=totalPages) {
         setCurrentPage(currentPage+1)

       }
}
const navigatePrevPage=()=>{
    if(currentPage!=1) {
         setCurrentPage(currentPage-1)

       }
}


  return (
  
    <>
      <Header insideHome={true}/>
    <div style={{paddingTop:'50px'}} className='container px-4 mx-auto' >
       {
       loading ?

        <div className='flex justify-center items-center my-5 text-lg'>
            <img className='me-5' width={'80px'} height={'80px'} src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif" alt="" />
           loading!!!
        </div>

        :<>
            <div className="grid grid-cols-4 gap-4">

              {
              allRecipes?.length>0 ?
               visibleAllRecipes?.map(recipe=>(
                <div key={recipe?.id} className="rounded border p-2 shadow">
                <img width={'100%'} height={'200px'} src={recipe?.image}alt="" />
                <div className='text-center'>
                    <h3 className='text-l font-bold'>{recipe?.name}</h3>
                    <Link to={`/${recipe?.id}/view`} className='bg-slate-600 text-white rounded mt-3 p-1 inline-block hover:text-emerald-300'>View More !</Link>
                </div>
            </div>
               ))
              :
               <div  className='flex font-bold text-green-600 justify-center items-center my-5 text-lg'>
                Recipe not found....
               </div>
            }
            </div>
           <div className="text-2xl text-center font-bold mt-20">
            <span onClick={navigatePrevPage} className='cursor-pointer'><i className="fa-solid fa-backward me-5"></i></span>
            <span>{currentPage} of {totalPages} </span>
            <span onClick={navigateNextPage} className='cursor-pointer'><i className="fa-solid fa-forward ms-5"></i></span>

           </div>
       </>
       }
    </div>
    </>
  )
}

export default Home