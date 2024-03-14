import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { GoChevronDown } from "react-icons/go";

export default function SearchBox() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleSearchContainer = () => {
        setIsSearchOpen(!isSearchOpen);
    };
    return (
        <div className={`flex justify-between items-center px-5 absolute transition ease-in-out delay-150 bg-white w-full z-40 shadow-md py-5 ${isSearchOpen ? 'mt-0 opacity-100' : '-mt-40 opacity-0'}`}>
            <div className='flex justify-between items-center'>
                <IoSearch size={20} />
                <input placeholder='search' className='ml-3 focus:outline-none' />
            </div>
            <button onClick={toggleSearchContainer}><IoMdClose /></button>
        </div>
    )
}
