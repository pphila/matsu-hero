import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section>
        {/* <Navbar /> */}
        <div className='flex justify-center'>
          <Image src="/../public/assets/img/MM.png" alt="/" width="250" height="250"/>
        </div>
        
      </section>

      <main>
        <p className='uppercase text-sm text-center tracking-widest text-gray-600'>PDX House DJ</p>
        <h1 className="text-6xl text-center py-40">MATSU | <span className='text-[#E74646] font-semibold'>dot</span> | MOTO</h1>
        <h2 className="text-center">-Under Construction-</h2>
      </main>

      {/* <section>
        <Hero />
      </section> */}
    </>
  )
    
}
