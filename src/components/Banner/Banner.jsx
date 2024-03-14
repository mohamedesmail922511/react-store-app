import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner() {
  return (
    <div className='container-fluid px-6'>
       <div className='flex flex-col justify-evenly md:flex-row'>
         <div className='flex-1 m-1 relative'>
            <img src='/images/banner/1.jpg' width='100%' height='50%' alt='imagename'/>
            <Link to='/shop' className='bg-primary text-white text-xs px-3 py-2 h-8 hover:bg-secondary rounded-md absolute top-1/2 bottom-1/2 right-1/2'>Shop Now</Link>
         </div>
         <div className='flex-1 m-1 relative'>
            <img src='/images/banner/2.jpg' width='100%' height='50%' alt='imagename' />
            <Link to='/shop' className='bg-primary text-white text-xs px-3 py-2 h-8 hover:bg-secondary rounded-md absolute top-1/2 bottom-1/2 right-1/2'>Shop Now</Link>
         </div>
        
       </div>
      
    </div>
  )
}
