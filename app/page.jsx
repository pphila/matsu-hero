import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <>
      <section>
        <Navbar />
      </section>

      {/* <main>
        <h1 className="text-6xl text-center py-4">MATSU | dot | MOTO</h1>
        <p className="text-center">-Under Construction-</p>
      </main> */}

      <section>
        <Hero />
      </section>
    </>
  )
    
}
