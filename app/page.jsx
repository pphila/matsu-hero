import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
import Image from 'next/image';
import logo from './../public/assets/img/matsumoto-logo.png';

export default function Home() {
  return (
    <>
      <section>
        {/* <Navbar /> */}
        <div className='flex justify-center'>
          <Image src={logo} alt="logo" width="250" height="250"/>
        </div>
        
      </section>

      <main>
        <p className='uppercase text-sm text-center py-20 tracking-widest text-gray-600'>PDX House DJ</p>
        <h1 className="text-6xl text-center py-20">MATSU | <span className='text-[#E74646] font-semibold'>dot</span> | MOTO</h1>
        <h2 className="text-center">-Loading CDJs-</h2>
      </main>

      {/* <section>
        <Hero />
      </section> */}
    </>
  )

}
