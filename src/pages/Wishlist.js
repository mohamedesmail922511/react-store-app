import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/MobileFooter/MobileFooter'
import WishlistContent from '../components/WishContent/WishlistContent'





export default function Wishlist() {

  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <WishlistContent />
      <Footer />
      <MobileFooter />
    </>
  )
}
