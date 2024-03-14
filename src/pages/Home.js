import React from 'react'
import TopHeader from '../components/TopHeader/TopHeader'
import MiddleHeader from '../components/MiddleHeader/MiddleHeader'
import Carsouel from '../components/Carsouel/Carsouel'
import Categories from '../components/Categories/Categories'
import Products from '../components/Products/Products'
import Footer from '../components/Footer/Footer'
import MobileFooter from '../components/MobileFooter/MobileFooter'
import Banner from '../components/Banner/Banner'
import { useTranslation } from 'react-i18next';


function Home() {
  const { t } = useTranslation();
  return (
    <div>
        <TopHeader />
        <MiddleHeader />
        <Carsouel />
        <Categories />
        <Banner />
        <Products />
        <Footer />
        <MobileFooter />
    </div>
  )
}

export default Home