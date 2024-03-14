import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from './pages/Details';
import Login from './pages/Login';
import Home from "./pages/Home";
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import Checkout from './pages/Checkout';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
           <Route index element={<Home /> } />
           <Route path="/details/:id" element={<Details />} />
           <Route path='/login' exact element={<Login/>} />
           <Route path='/signup' exact element={<Signup />} />
           <Route path='/cart' exact element={<Cart />} />
           <Route path='/wishlist' exact element={<Wishlist />} />
           <Route path='/checkout' exact element={<Checkout />} />
           <Route path='/about' exact element={<About />} />
           <Route path='/contact' exact element={<Contact />} />
           <Route path='/account' exact element={<Account />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
