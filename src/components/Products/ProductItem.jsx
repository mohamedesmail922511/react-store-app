import React from 'react'
import { HiOutlineMagnifyingGlassPlus } from "react-icons/hi2";
import { FaCartArrowDown } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './styles.css'
import { addtocart } from '../../redux/cartReducer';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addtowish } from '../../redux/wishlistReducer';


export default function ProductItem({ id, image, name, price, sale }) {
    const dispatch = useDispatch();
    return (
        <div className='productitem hover:cursor-pointer shadow-md mx-1 my-2 rounded-lg overflow-hidden ' id={id}>
            <Link to={`/details/${id}`} className='block relative'>
                <img src={image} alt={name} width='100%' />

            </Link>

            <div className='content px-5 py-3'>
                <p className='text-sm'>{name}</p>
                {sale ? (
                    <div className='flex justify-between items-center mt-4'>
                        <p className='text-sm line-through text-red-600'>{price} AED </p>
                        <p className='text-sm'>{sale} AED</p>
                    </div>
                ) : (<div className='flex justify-start items-center mt-4'>
                    <p className='text-sm '>{price} AED </p>

                </div>)}

                <div className='flex justify-center items-center'>
                    <button className='flex items-center  px-2 py-1 mt-5' onClick={()=>dispatch(addtowish({
                         id: id,
                         name: name,
                         price: price,
                         image: image,
                         sale: sale,
                         quanity:1,
                    }))} >
                        <CiHeart className='text-primary' size={20} />
                    </button>
                    <button className='flex flex-1 justify-center items-center bg-primary rounded-lg px-2 py-1 mt-5' onClick={() => dispatch(addtocart({
                        id: id,
                        name: name,
                        price: price,
                        image: image,
                        sale: sale,
                        quantity:1,
                    }))} >
                        <FaCartArrowDown color='white' size={17} />
                        
                    </button>
                    <button className='flex items-center  px-3 py-2 mt-5'>
                        <HiOutlineMagnifyingGlassPlus className='text-primary' size={20} />
                    </button>
                </div>

            </div>
        </div>
    )
}
