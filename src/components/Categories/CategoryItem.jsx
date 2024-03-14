import React from 'react'

export default function CategoryItem({index,image,name}) {
    return (
        <div key={index} className='w-1/5 md:w-2/12 m-5 category-item flex flex-col justify-center items-center hover:cursor-pointer'>
            <div className='w-20 h-20 rounded-full overflow-hidden'>
                <img src={image} alt='fd' />
            </div>
            <p className='text-xs mt-3'>{name}</p>
        </div>
    )
}
