import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader';
import MiddleHeader from '../components/MiddleHeader/MiddleHeader';
import Footer from '../components/Footer/Footer';
import MobileFooter from '../components/MobileFooter/MobileFooter';
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
   <>
    <TopHeader />
    <MiddleHeader />
    <div className='container m-auto my-5'>
      <div className='grid grid-cols-1 md:grid-cols-3  gap-3'>
        <div className='shadow rounded-lg flex flex-col justify-center items-center py-6'>
           <FaPhoneAlt size={30} color='black' />
          <Link to='tel:123456789' className='mt-10'>123456789</Link>
        </div>
        <div className='shadow rounded-lg flex flex-col justify-center items-center py-6'>
           <FaWhatsapp size={30} color='black' />
          <Link to='tel:123456789' className='mt-10'>123456789</Link>
        </div>
        <div className='shadow rounded-lg flex flex-col justify-center items-center py-6'>
    
          <FaRegEnvelope size={30} color='black' />
          <Link to="mailto:mohamedesmail9225@gmail.com" className='mt-10'>123456789</Link>
        </div>
      </div>
    </div>
    <Footer />
    <MobileFooter />
   </>
  )
}
