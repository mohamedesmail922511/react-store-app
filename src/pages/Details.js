import React from 'react'
import { useParams } from 'react-router-dom'
import TopHeader from '../components/TopHeader/TopHeader';
import MiddleHeader from '../components/MiddleHeader/MiddleHeader';
import Footer from '../components/Footer/Footer';
import MobileFooter from '../components/MobileFooter/MobileFooter';
import ProductGallery from '../components/ProductGallery/ProductGallery';

export default function Details() {
  const {id} = useParams();
  return (
   <>
    <TopHeader />
    <MiddleHeader />
    <ProductGallery product={id} />
    <Footer />
    <MobileFooter />
   </>
  )
}
