import Image from 'next/image';
import React from 'react';

const Carousel = () => {
  return (
    <div className='relative h-screen w-full'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <Image 
          src="/assets/blog1.jpg" 
          layout='fill' 
          objectFit='cover' 
          alt='slider' 
          className='z-[-1]' 
        />
      </div>
    </div>
  );
}

export default Carousel;
