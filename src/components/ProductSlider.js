import React from 'react'
import Link from 'next/link'
import { TiArrowRight } from "react-icons/ti";

const ProductSlider = () => {
  return (
    <div className='px-24 m-10'>
        <div className='container flex justify-between text-center'>
           <h2 className='font-smibold text-3xl '><span className='font-bold text-4xl text-[#BDDD01]'>| </span>  
           <strong>Talk of the Town Products</strong></h2>
           <button className='flex  text-red-600 gap-2'><Link href={"/"} >View All</Link><TiArrowRight  /></button>
        </div>
        <div>
            hello
        </div>
    </div>
  )
}

export default ProductSlider