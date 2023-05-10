import React from 'react';
import Image from 'next/image';
import bannerLogo from './../../public/assets/img/matsu.MOTO-Long.jpg';

const Hero = () => {
  return(
    <>
      <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div className='py-4'>
            <p className='uppercase text-md tracking-widest font-semibold text-gray-600'>RIP City DJ | Performer | Producer</p>
            <Image src={bannerLogo} alt="/" width="500" height="250"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;