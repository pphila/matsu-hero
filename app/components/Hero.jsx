import React from 'react';

const Hero = () => {
  return(
    <>
      <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
          <div className='py-4'>
            <p className='uppercase text-sm tracking-widest text-gray-600'>PDX House DJ</p>
            <h1 className="text-6xl text-center py-40">MATSU | <span className='text-[#E74646] font-semibold'>dot</span> | MOTO</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;