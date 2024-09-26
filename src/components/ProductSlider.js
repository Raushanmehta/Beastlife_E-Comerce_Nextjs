"use client";
import React, { useRef } from 'react';
import Link from 'next/link';
import { TiArrowRight } from "react-icons/ti";
import ProductCard from './ui/ProductCard';
import { productData } from '@/constants';
import { MdKeyboardArrowRight,MdKeyboardArrowLeft } from "react-icons/md";

const ProductSlider = () => {
  const trackRef = useRef(null);

  const scrollTrack = (direction) => {
    const scrollAmount = trackRef.current.firstElementChild.offsetWidth;
    trackRef.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className='bg-[#F6F6F6]'>
      <div className='flex items-center md:px-24 p-10'>
        <span className='text-7xl md:text-[40px] md:font-semibold text-[#BDDD01]'>|</span> 
        <div className='container flex justify-between mt-4 md:mt-2 md:pl-4 md:text-center'>
          <h2 className='font-bold text-3xl'> 
            Talk of the Town Products
          </h2>
          <button className='flex text-red-600 md:text-xl md:gap-1'>
            <Link href={"/"}>View All</Link>
            <TiArrowRight className='mt-1' />
          </button>
        </div>  
      </div>
      
      <section className="relative overflow-hidden md:px-2 ">
        <div className="flex flex-col items-center">
          <ul className="flex overflow-x-auto snap-x snap-mandatory space-x-4 scroll-hidden" ref={trackRef}>
            {productData.map((product, index) => (
              <li key={index} className="flex-shrink-0 w-1/5"> 
                <ProductCard product={product} />
              </li>
            ))}
          </ul>
          <div className="flex justify-between gap-4 text-2xl mt-4">
            <button className="bg-black border  p-3   rounded-full 
             text-[#BDDD01] transition" onClick={() => scrollTrack('prev')}><MdKeyboardArrowLeft />
            </button>
            <button className="bg-black border  p-3 rounded-full
              text-[#BDDD01] transition" onClick={() => scrollTrack('next')}><MdKeyboardArrowRight />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductSlider;
