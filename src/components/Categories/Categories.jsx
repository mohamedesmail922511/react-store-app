import React, { useState } from 'react'
import './styles.css';
import categories from '../../data/allcategories';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";
import CategoryItem from './CategoryItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';





export default function Categories() {
    const [displayedCategories, setDisplayedCategories] = useState(categories.slice(0, 6));
    const [showAll, setShowAll] = useState(false);


    const handleShowMore = () => {
        setDisplayedCategories(categories);
        setShowAll(true);
    };
    const handleShowLess = () => {
        setDisplayedCategories(categories.slice(0, 6));
        setShowAll(false);
    };



    return (
        <div className='container-fluid px-10 m-auto my-7 categories'>
            <h6 className='flex items-center categories-title'>
                <span className='icon-dash bg-primary'></span>
                <span className='text-sm mx-2  hover:cursor-pointer'>Shop By Category</span>
            </h6>
            <hr />

            <div className='mt-4  relative'>
                <TransitionGroup className='flex justify-between flex-wrap mt-4 relative w-full'>
                    {displayedCategories.map((item, index) => (
                        <CSSTransition key={index} timeout={500} classNames="fade">
                            <CategoryItem index={index} image={item.image} name={item.name} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
                <div className='flex justify-center w-full'>
                    {!showAll && categories.length > 6 && (
                        <button className='bg-primary hover:cursor-pointer w-7 h-7 rounded-full text-white text-xs shadow-lg flex justify-center items-center' onClick={handleShowMore}> <FaArrowCircleDown size={14} /> </button>
                    )}
                </div>

                <div className='flex justify-center w-full absolute bottom-10'>
                    {displayedCategories.length > 6 && (
                        <button className='bg-primary hover:cursor-pointer w-7 h-7 rounded-full text-white text-xs shadow-lg flex justify-center items-center' onClick={handleShowLess}> <FaArrowAltCircleUp size={14} /> </button>
                    )}
                </div>
            </div>


        </div>
    )
}
