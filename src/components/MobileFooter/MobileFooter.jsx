import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import { LuUser2 } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';





export default function MobileFooter() {
   const products = useSelector(state => state.cart.products)
   const wishlistitems = useSelector(state=> state.wish.productsWish)

   return (
      <div className='fixed bottom-0 w-full right-0 left-0 bg-slate-100 shadow-lg border-t-2 border-t-gray-600 h-18 py-3  md:hidden'>
         <div className='container-fluid px-10 m-auto flex justify-between items-center '>
            <Link href='/cart' className='flex flex-col justify-center items-center relative' >
               <AiOutlineShoppingCart size={25} />
               <p className='text-xs'>Cart</p>
               {products.length > 0 ? (<span className='w-5 h-5 flex justify-center items-center text-white text-xs absolute -top-2 -right-2 bg-primary rounded-full'>{products.length}</span>
               ) : (<></>)}
            </Link>
            <Link to='/wishlist' className='flex flex-col justify-center items-center relative'>
               <IoIosHeartEmpty size={25} />
               <p className='text-xs '>Wishlist</p>

               {wishlistitems.length > 0 ? (<span className='w-5 h-5 flex justify-center items-center text-white text-xs absolute -top-2 -right-0 bg-primary rounded-full'>{wishlistitems.length}</span>
               ) : (<></>)}


            </Link>
            <Link to='/account' className='flex flex-col justify-center items-center'>
               <LuUser2 size={25} />
               <p className='text-xs'>Account</p>
            </Link>
            <Link to='/' className='flex flex-col justify-center items-center'>
               <IoHomeOutline size={25} />
               <p className='text-xs'>Home</p>
            </Link>
         </div>
      </div>
   )
}
