import React from 'react'
import { TEDropdown, TEDropdownToggle, TEDropdownMenu, TEDropdownItem, TERipple, } from "tw-elements-react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import LanguageSelector from '../LangSelector/LanguageSelector';
import { Link } from 'react-router-dom';


export default function TopHeader() {
    const {t} = useTranslation();

  

    return (
        <div className='bg-gray-950 py-1'>
            <div className='container-fluid px-10 flex justify-between items-center m-auto'>
                <div className='flex justify-center items-center'>
                    <LanguageSelector />
                    <div>
                        <Link to='/' className='flex items-center'>
                        <FaPhoneAlt color='white' size={13} /> 
                        <span className='text-sm mx-2 text-white'>0123456789</span>
                        </Link>
                    </div>
                </div>


                <div className='hidden md:block'>
                    <p className='text-xs text-white'>{t('translation.headertitle')}</p>
                </div>

                <div className='hidden md:block'>
                    <Link to='login' className='text-xs mx-1 text-white'>{t('translation.login')}</Link>
                    <Link to='signup' className='text-xs mx-1 text-white'>{t('translation.createaccount')}</Link>
                    <Link to='wishlist' className='text-xs mx-1 text-white'>{t('translation.wishlist')}</Link>
                </div>


                <div className='md:hidden'>

                    <TEDropdown className="flex justify-center">
                        <TERipple rippleColor="light">
                            <TEDropdownToggle className="flex items-center whitespace-nowrap rounded  pb-2 pt-2.5 text-xs font-medium  leading-normal text-white  transition duration-150 ease-in-out focus:ring-0 motion-reduce:transition-none dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">

                            <FaRegUser color='white' size={17} />
                              
                            </TEDropdownToggle>
                        </TERipple>

                        <TEDropdownMenu>
                            <TEDropdownItem>
                                <Link to="/login" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                    Login
                                </Link>
                            </TEDropdownItem>
                            <TEDropdownItem>
                                <Link to="/signup" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                    Create Account
                                </Link>
                            </TEDropdownItem>
                            <TEDropdownItem>
                                <Link to="/wishlist" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                    Wishlist
                                </Link>
                            </TEDropdownItem>
                        </TEDropdownMenu>
                    </TEDropdown>

                </div>





            </div>
        </div>
    )
}
