import React from 'react'
import Link from 'next/link'
import { TiArrowRight } from "react-icons/ti";
import ProductCard from './ui/ProductCard';
import { productData } from '@/constants';

const ProductSlider = () => {
  
  return (
    <div className='md:px-14 m-4 md:m-10'>
      <div className='flex items-center'>
      <span className='  text-7xl md:text-[40px]  md:font-semibold text-[#BDDD01]'>| </span> 
        <div className='container flex justify-between mt-4 md:mt-2 md:pl-4  md:text-center'>
            <h2 className='font-smibold text-3xl '> 
            <strong>Talk of the Town Products</strong></h2>
            <button className='flex  text-red-600 md:text-xl md:gap-1'><Link href={"/"} >View All</Link><TiArrowRight className='mt-1' /></button>
        </div>  
        </div>
        <div className='h-60 mt-10 bg-slate-600'>
            <ProductCard product={productData}/> 
            
        </div>
    </div>
  )
}

export default ProductSlider