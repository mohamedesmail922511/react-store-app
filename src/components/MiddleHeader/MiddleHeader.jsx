import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import './style.css'


export default function MiddleHeader() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const products = useSelector(state=>state.cart.products);
    
    const toggleSearchContainer = () => {
        setIsSearchOpen(!isSearchOpen);
    };


    const showSidebar = () => {
        setIsVisible(true);
      };

      const hideSidebar = () => {
        setIsVisible(false);
      };
    
     
      const { t } = useTranslation();
    return (
        <div className=''>

            <div className={`flex justify-between items-center px-5 absolute transition ease-in-out delay-150 bg-white w-full z-40 shadow-md py-5 ${isSearchOpen ? 'mt-0 opacity-100' : '-mt-40 opacity-0'}`}>
                <div className='flex justify-between items-center'>
                    <IoSearch size={20} />
                    <input placeholder='search' className='ml-3 focus:outline-none' />
                </div>
                <button onClick={toggleSearchContainer}><IoMdClose color='red' /></button>
            </div>


            <div className='container-fluid px-10 m-auto flex justify-between items-center shadow-lg'>
                 <div className='md:hidden'>
                    <button onClick={showSidebar}><HiBars3CenterLeft color='black' size={30} /></button>
                 </div>
                <Link to='/' className='flex justify-center items-center'>
                    <img src='/images/apple-touch-icon-114x114.png' width='70px' alt='name' />
                    <p className='text-lg font-bold'>Store</p>
                </Link>

                <div className='hidden md:block'>
                    <nav>
                        <ul className='flex'>
                            <li className='mx-2 hover:text-primary transition-all pb-3 duration-1000 ease-linear'><Link to='/' className='text-sm flex justify-center items-center'>{t('translation.Home')}</Link></li>
                            <li className='mx-2 hover:text-primary transition-all pb-3 duration-1000 ease-linear'><Link to='/shop' className='text-sm flex justify-center items-center'>Shop</Link></li>

                            <li className='nav-item mx-2 hover:text-primary transition-all pb-3 duration-1000 ease-linear'>
                               <p className='text-sm flex justify-center items-center'>Categories <GoChevronDown /> </p>

                                <div className='dropdown-content shadow-lg z-50'>
                                    <div className='dropdown-items flex justify-between items-center '>
                                        <ul className='mr-10 block w-1/2'>
                                            <li className='mb-3'><Link to='/shop' className='text-xs hover:text-primary'>Mens Section</Link></li>
                                            <li className='mb-3'><Link to='/shop' className='text-xs hover:text-primary'>Kids Sections</Link></li>
                                            <li className='mb-3'><Link to='/shop' className='text-xs hover:text-primary'>Womens Section</Link></li>
                                            <li className='mb-3'><Link to='/shop' className='text-xs hover:text-primary'>Shoes Sections</Link></li>
                                            <li className='mb-3'><Link to='/shop' className='text-xs hover:text-primary'>Socks Section</Link></li>
                                            <li className='mb-3'><Link to='/shop' className='text-xs hover:text-primary'>Trending Section</Link></li>
                                        </ul>
                                        <div className='w-1/2'>
                                          <img src='/images/parallax-banners/cosmetic-parallax.jpg' alt='name' width='100%'/>
                                        </div>
                                    </div>
                                </div>


                            </li>


                            <li className='mx-2 hover:text-primary transition-all pb-3 duration-1000 ease-linear'><Link to='/about' className='text-sm flex justify-center items-center'>About Store</Link></li>
                            <li className='mx-2 hover:text-primary transition-all pb-3 duration-1000 ease-linear'><Link to='/contact' className='text-sm flex justify-center items-center'>Contact us</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='mx-2'>
                        <IoSearch size={20} className='hover:cursor-pointer' onClick={toggleSearchContainer} />
                    </div>

                    <Link to='cart' className='relative mx-2'>
                        <BsMinecartLoaded size={20} />
                        <span className='absolute -top-3 -right-3 bg-black rounded-full w-4 h-4 flex justify-center items-center text-xs text-white'>{products.length}</span>
                    </Link>
                </div>
            </div>

            {/* mobile menu */}
            <div className={`fixed md:hidden h-screen bg-slate-100 shadow-lg w-8/12 top-0 bottom-4 z-50 ${isVisible ? 'translate-x-0 transition ease-in-out delay-150 duration-2000' : '-translate-x-[30rem]'} transition ease-in-out duration-2000 delay-150  `}>
            <div className='flex justify-end px-5 mt-5'>
               <button onClick={hideSidebar}><IoMdClose color='red' /></button>
            </div>
                <ul className='mx-2'>
                    <li className='nav-item my-3'><Link to='/' className='flex justify-between px-3 nav-link hover:text-primary'>Home</Link></li>
                    <li className='nav-item my-3'><Link to='/' className='flex justify-between px-3 nav-link hover:text-primary'><span>Categories</span> <FaChevronDown /></Link>
                       <div className='dropdown-content-mobile'>
                        <div className='dropdown-menu-mobile'>
                            <ul>
                                <li className='my-2 mx-4 p-2  hover:translate-x-5 transition-all hover:bg-white'><Link className='hover:text-primary' to='/shop'>Category 1</Link></li>
                                <li className='my-2 mx-4 p-2  hover:translate-x-5 transition-all hover:bg-white'><Link className='hover:text-primary' to='/shop'>Category 1</Link></li>
                                <li className='my-2 mx-4 p-2  hover:translate-x-5 transition-all hover:bg-white'><Link className='hover:text-primary' to='/shop'>Category 1</Link></li>
                                <li className='my-2 mx-4 p-2  hover:translate-x-5 transition-all hover:bg-white'><Link className='hover:text-primary' to='/shop'>Category 1</Link></li>
                                
                            </ul>
                        </div>
                       </div>
                    </li>
                    <li className='nav-item my-3'><Link to='/shop' className='flex justify-between px-3 nav-link hover:text-primary'>Shop</Link></li>
                    <li className='nav-item my-3'><Link to='/contact' className='flex justify-between px-3 nav-link hover:text-primary'>Contact us</Link></li>

                </ul>
            </div>
        </div>
    )
}
