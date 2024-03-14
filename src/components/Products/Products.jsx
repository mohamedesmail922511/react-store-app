import React from 'react'
import products from '../../data/allproducts'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ProductItem from './ProductItem';


export default function Products() {
    return (
        <div className='container-fluid px-4 m-auto mt-7 categories'>
            <h6 className='flex items-center categories-title'>
                <span className='icon-dash bg-primary'></span>
                <span className='text-sm mx-2  hover:cursor-pointer'>All Products</span>
            </h6>
            <hr />

            <div className='mt-4 relative'>
                <TransitionGroup className='grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-7  mt-4 relative w-full'>
                    {products.map((item, index) => (
                        <CSSTransition key={index} timeout={500} classNames="fade">
                            <ProductItem id={item.id}  image={item.image} price={item.price} sale={item.sale} name={item.name} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
        </div>
    )
}
