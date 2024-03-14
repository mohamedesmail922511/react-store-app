import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/MobileFooter/MobileFooter'
import { TEInput } from "tw-elements-react";
import { useSelector } from 'react-redux'
import { CiTrash } from "react-icons/ci";



export default function Checkout() {
  const products = useSelector(state => state.cart.products);
  return (
    <>

      <TopHeader />
      <MiddleHeader />
      <div className='container-fluid m-auto px-10 my-10'>
        <h2>Checkout</h2>
        <hr />
        <div className='flex flex-col md:flex-row '>
          <div className='left-side flex-1 md:mr-32'>
            <h2 className='my-10'>Billing Details</h2>
            <div className='my-4'>
              <TEInput type="text" id="exampleFormControlInput2" label="Name" size="lg" ></TEInput>
            </div>
            <div className='my-4'>
              <TEInput type="text" id="exampleFormControlInput2" label="phone" size="lg" ></TEInput>
            </div>
            <div className='my-4'>
              <TEInput type="text" id="exampleFormControlInput2"  label="city"  size="lg" ></TEInput>
            </div>
            <div className='my-4'>
              <TEInput type="text"  id="exampleFormControlInput2"  label="building"  size="lg" ></TEInput>
            </div>
            <div className='my-4'>
              <TEInput type="text"  id="exampleFormControlInput2"  label="flat No"  size="lg"  ></TEInput>
            </div>
          </div>
          <div className='right-side flex-1'>
            <h1 className='text-center my-5'>Cart Content</h1>
            <hr />

            {products.map((item)=>(
              <div className='flex justify-between items-center shadow-md my-2 rounded-md overflow-hidden'>
                <div>
                  <img src={item.image} alt={item.name} width='60px' />
                </div>
                <div className='ml-5'>
                  <p className='text-xs'>{item.name}</p>
                  <div className='flex mt-3'>
                    <p className='text-xs mr-3 line-through text-red-600'>{item.price} AED </p>
                    <p className='text-xs mx-3'>{item.sale} AED</p>
                  </div>
                </div>
                <div className='mr-2'>
                  <button><CiTrash color='red' /></button>
                </div>
              </div>
            ))}

            <div className='flex justify-between items-center  shadow-md my-2 px-4 py-5 rounded-md overflow-hidden'>
                <p>Shipping</p>
                <p>1000</p>
            </div>
            <div className='flex justify-between items-center  shadow-md my-2 px-4 py-5 rounded-md overflow-hidden'>
                <p>total</p>
                <p>1000</p>
            </div>



            <div className='flex mt-5'>
              <button className='bg-primary text-white w-full py-2 rounded-md'>Place Your Order</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <MobileFooter />
    </>
  )
}
