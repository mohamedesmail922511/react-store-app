import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/MobileFooter/MobileFooter'
import CartContent from '../components/CartContent/CartContent'




export default function Cart() {
  return (
    <>
        <TopHeader />
        <MiddleHeader />
         <CartContent/>
        <Footer />
        <MobileFooter />
    </>
  )
}
