import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Music from './components/Music';
import Photos from './components/Photos';
import Contact from './components/Contact';
import Footer from './components/Footer';

// import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
        
        {/* <div className='flex justify-center'>
          <Image src="/../public/assets/img/MM.png" alt="/" width="250" height="250"/>
        </div> */}
        
      </section>

      <main>

        {/* <p className='uppercase text-sm text-center tracking-widest text-gray-600'>PDX House DJ</p>
        <h1 className="text-6xl text-center py-40">MATSU | <span className='text-[#E74646] font-semibold'>dot</span> | MOTO</h1>
        <h2 className="text-center">-Under Construction-</h2> */}

        <section>
          <Hero />
        </section>
        
        <section>
          <Bio />
        </section>

        <section>
          <Music />
        </section>

        <section>
          <Photos />
        </section>

        <section>
          <Contact />
        </section>
      </main>

      <section>
        <Footer />
      </section>
    </>
  )

}
