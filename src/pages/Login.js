import React from 'react'

import TopHeader from '../components/TopHeader/TopHeader';
import MiddleHeader from '../components/MiddleHeader/MiddleHeader';
import MobileFooter from '../components/MobileFooter/MobileFooter';
import Footer from '../components/Footer/Footer'
import LoginForm from '../components/LoginForm/LoginForm';

export default function Login() {
  return (
    <>
      <TopHeader />
      <MiddleHeader />
      <LoginForm />
      <Footer />
      <MobileFooter />
    </>
  )
}
