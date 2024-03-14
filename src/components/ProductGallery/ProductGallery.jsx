import React, { useEffect, useState } from 'react';
import './style.css'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import { TETabs, TETabsContent, TETabsItem, TETabsPane, } from "tw-elements-react";
import { FaRegCheckCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
import products from '../../data/allproducts';

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";






export default function ProductGallery({ product }) {

  const [quantity, setQuantity] = useState(1);
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [ProductDetails, setFilteredProducts] = useState({});




  let imageObjects = [];
  if (ProductDetails.images) {
    imageObjects = ProductDetails.images.map((path) => ({
      original: path,
      thumbnail: path,
    }));


  }


  const increaseQuantity = () => {
    setQuantity(quantity + 1)
  }

  const descreaseQuantity = () => {
    setQuantity(quantity - 1);
  }




  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }
    setJustifyActive(value);
  };




  // filter accoeding id

  const filterpproduct = (product) => {
    const productfilterd = products.find((item) => item.id == product)
    setFilteredProducts(productfilterd);
  }



  useEffect(() => {
    filterpproduct(product);
  }, [ProductDetails])


  return (
    <div className='container-fluid m-auto px-10 mt-5'>
      <div className='flex flex-col md:flex-row justify-between items-center'>
        <div className='flex-1 w-full m-2  flex flex-col justify-center items-center'>
          {ProductDetails ? (<><ImageGallery items={imageObjects}  showBullets='true'  autoPlay='true' /></>) : (<>No Images To Preview</>)}
        </div>
        <div className='flex-1 w-full h-full m-2'>
          <h2 className='text-xl'>{ProductDetails.name}</h2>


          {ProductDetails.sale ? (
            <div className='flex justify-start items-center mt-5'>
              <p className='line-through text-red-600 '>{ProductDetails.price} AED</p>
              <p className='mx-4'>{ProductDetails.sale} AED</p>
            </div>

          ) : (
            <div className='flex justify-start items-center mt-5'>

              <p className='text-primary'>{ProductDetails.price} AED</p>
            </div>
          )}






          {ProductDetails.color ? (<div className='mt-5'>
            <label>Color</label>
            <div className='flex'>

              {ProductDetails.color.length > 1 ? (<>

                {ProductDetails.color.map((color) => (
                  <div className='flex flex-col color-item' key={color.id}>
                    <input id={color.color} type='radio' className='color-radio' name='color' />
                    <label htmlFor={color.color} className='hover:cursor-pointer color-label flex flex-col justify-center items-center p-1'>
                      <img src={color.image} width='50px' alt='name' />
                      <p className='text-xs'>{color.color}</p>
                      <div className='check flex justify-center mt-1'>
                        <FaRegCheckCircle color='green' />
                      </div>
                    </label>

                  </div>
                ))}

              </>) : (<></>)}

            </div>
          </div>) : (<></>)}








          {ProductDetails.size ? (<div className='mt-5'>
            <label>Size</label>
            <div className='flex'>

         {ProductDetails.size.length > 0 ? (
          <>{ProductDetails.size.map((size)=>(
            <div className='flex flex-col color-item' key={size.id}>
                <input id={size} type='radio' className='size-radio' name='size' />
                <label htmlFor={size} className='hover:cursor-pointer color-label flex flex-col items-center justify-center p-1'>
                  <span className='text-xs my-3'>{size}</span>
                  <div className='check'>
                    <FaRegCheckCircle color='green' />
                  </div>
                </label>

              </div>
          ))}</>
          
         ) : (<></>)}


            </div>
          </div>) : (<></>)}




          <div className='mt-5'>
            <label className='my-1'>Qty</label>
            <div className='mt-2'>
              <div className='bg-slate-100 px-3 w-fit py-2'>
                <button onClick={increaseQuantity}><AiFillPlusCircle />
                </button>
                <input type='text' readOnly value={quantity} className='focus:outline-none focus:border-none text-center bg-transparent' />
                {quantity > 1 ? (<button onClick={descreaseQuantity}><AiFillMinusCircle />
                </button>) : (<></>)}
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <div className='flex flex-col md:flex-row'>
              <button className='bg-primary px-3 py-1 rounded-md m-2 flex-1'><span className='text-white text-xs'>Add To cart</span></button>
              <button className='bg-black px-3 py-1 rounded-md m-2 flex-1'><span className='text-white text-xs'>Add To wishlist</span></button>
              <Link to='/checkout' className='bg-black px-3 py-2 rounded-md m-2 flex-1 flex justify-center'><span className='text-white text-xs'>Go Checkout</span></Link>
            </div>
          </div>
        </div>
      </div>

      {/* product Description */}
      <div className="mb-3">
        <TETabs justify>
          <TETabsItem
            onClick={() => handleJustifyClick("tab1")}
            active={justifyActive === "tab1"}
          >
            Description
          </TETabsItem>
          <TETabsItem
            onClick={() => handleJustifyClick("tab2")}
            active={justifyActive === "tab2"}
          >
            Reviews
          </TETabsItem>

        </TETabs>

        <TETabsContent>
          <TETabsPane show={justifyActive === "tab1"}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </TETabsPane>
          <TETabsPane show={justifyActive === "tab2"}>
            <div className='flex flex-col'>
               
               <div className='border rounded-md shadow-lg my-3 flex justify-start items-center py-4 px-5'>
                <div>
                  <img src='/images/user.png' width='40px' alt='name' />
                </div>
                <div className='flex flex-col ml-5'>
                  <p>review</p>
                </div>
               </div>

            </div>
          </TETabsPane>
        </TETabsContent>
      </div>

    </div>
  )
}
