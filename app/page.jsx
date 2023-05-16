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
      </section>

      <main>
        
        <div className='fixed bg-cover bg-center bg-no-repeat w-full h-screen custom-image z-[-1]'>
          {/* Container for background image */}
        </div>

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

      {/* <section>
        <Footer />
      </section> */}
    </>
  )

}
