import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { SlTrash } from "react-icons/sl";
import { GrPowerReset } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux'
import { removefromwish, resetwish } from '../../redux/wishlistReducer';

export default function WishlistContent() {
    const wishlistitems = useSelector(state => state.wish.productsWish)
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(1);
  return (
    <div className='container-fluid px-5 m-auto py-10'>
    <h2 className='text-center'>Your Wishlist</h2>
    <hr/>
 
    {wishlistitems.length > 0 ? (
            <div className='flex justify-end mt-5'>
                <button className='flex items-center bg-primary rounded-md px-4 py-2' onClick={()=>dispatch(resetwish())}>
                    <GrPowerReset color='white' size={20} />
                    <span className='text-sm mx-2 text-white'>Empty Cart</span></button>
            </div>
        ) : (<></>)}



        {wishlistitems.length > 0 ? (
           <div className='grid xs:grid-cols-2 md:grid-cols-5 mt-5 gap-1'>
           {wishlistitems.map((product) => (
               <div className='item shadow-md rounded-lg' key={product.id}>

                   <Link to={`/details/{id}`}>
                       <img src={product.image} width='100%' alt='product name' />
                   </Link>

                   <div className='content p-4'>
                       <h4>{product.name}</h4>
                       <div className='flex items-center mt-3'>
                           <h5 className='mx-1 line-through text-red-600 text-sm'>{product.price} AED</h5>
                           <h5 className='mx-1 text-sm'>{product.sale} AED</h5>
                       </div>
                       <div className='flex items-center justify-end'>
                          
                           <button onClick={()=>dispatch(removefromwish({
                             id:product.id,
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
