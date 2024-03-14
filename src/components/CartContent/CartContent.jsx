import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { SlTrash } from "react-icons/sl";
import { removefromcart, resetcart ,increaseQuantity, decreaseQuantity} from '../../redux/cartReducer';
import { GrPowerReset } from "react-icons/gr";





export default function CartContent() {
    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch()



    // increase the qunatity of the product
      const handleincreaseQuantity = (productId) => {
       dispatch(increaseQuantity(productId))
    }

    // decrease the quantity of the product
    const handledecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId))
    }





    return (
        <div className='container-fluid px-5'>
            <h2 className='text-center mt-10'>Your Cart</h2>
            <hr />

            {products.length > 0 ? (
                <div className='flex justify-end mt-5'>
                    <button className='flex items-center bg-primary rounded-md px-4 py-2' onClick={() => dispatch(resetcart())}>
                        <GrPowerReset color='white' size={20} />
                        <span className='text-sm mx-2 text-white'>Empty Cart</span></button>
                </div>
            ) : (<></>)}



            {products.length > 0 ? (
               <div className='grid xs:grid-cols-2 md:grid-cols-5 mt-5 gap-2'>
               {products.map((product) => (
                   <div className='item shadow-md rounded-lg overflow-hidden' key={product.id}>

                       <Link to={`/details/{id}`}>
                           <img src={product.image} width='100%' alt='product name' />
                       </Link>

                       <div className='content p-4'>
                           <h4 className='text-xs'>{product.name}</h4>
                           <div className='flex items-center mt-3'>
                               <h5 className='mx-1 line-through text-red-600 text-sm'>{product.price} AED</h5>
                               <h5 className='mx-1 text-sm'>{product.sale} AED</h5>
                           </div>
                           <div className='flex items-center justify-between'>
                               <div className='bg-slate-100 px-3 py-1 flex flex-nowrap w-fit mt-3'>
                                   <button onClick={()=>handleincreaseQuantity(product.id)}><AiFillPlusCircle />
                                   </button>
                                   <input type='text' disabled value={product.quantity} className='focus:outline-none focus:border-none text-center bg-transparent w-20' />
                                   {product.quantity > 1 ? (<button onClick={()=>handledecreaseQuantity(product.id)}><AiFillMinusCircle />
                                   </button>) : (<></>)}
                               </div>

                               <button onClick={() => dispatch(removefromcart({
                                   id: product.id
                               }))}>
                                   <SlTrash color='red' />
                               </button>
                           </div>
                       </div>
                   </div>
               ))}

           </div>
            ) : (
            <div className='flex flex-col justify-center items-center my-48'>
               <h1 className='bg-slate-100 p-3'>Your Is Empty</h1> 
               <Link to='/' className='mt-5 bg-primary rounded-lg px-3 py-2 text-white text-sm'>Go Shopping</Link>
            </div>
            )}







         
        </div>
    )
}
