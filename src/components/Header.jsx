import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../redux/slices/productSlice'

const Header = ({insideHome}) => {
    const dispatch=useDispatch()
  return (
    <div style={{height:'50px'}} className=' bg-slate-800 text-slate-200 flex justify-between pt-2	'>
       <Link className='text-xl font-bold pt-2' to={'/'}> <i className='fa-solid fa-bowl-food me-2'></i>Recipe App</Link>
<div>
{   
insideHome &&  
       <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{width:'200px'}} className='rounded p-2 text-black'type="text" placeholder='search products here' />
}    
</div>       </div>
  )
}

export default Header