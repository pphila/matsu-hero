import React from 'react';
import Image from 'next/image';
import bioPic from './../../public/assets/img/matsu.MOTO-bio.jpg';

const Bio = () => {
  return (
    <>
      <div id='bio' className='bg-gray-50 text-gray-950 w-full xxl:h-screen h-auto p-2 py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-2'>
          <div className='col-span-2 grid justify-center align-middle mt-16'>
            <h1 className='text-6xl text-center'>Biography</h1>
            <div className='max-w-[800] bg-gray-50/25 p-4 mt-4'>
              <p className='py-2 text-lg font-semibold mt-4'>DJ Matsu.MOTO is a Honolulu-born, Portland-based DJ working his way to the the big stage. Inspired by big name artists like Nitti Gritti, John Summit, and artist like Malaa, he has honed his skills and developed a unique sound that blends House, Tech House, and Big Room Bass.</p>
              <p className='py-2 text-lg font-semibold'>With a residency at Portland's top EDM club 45 East, Matsu.MOTO has become a top rising DJ in the Portland area. Opening for a wide range of artists like Keys n Krate, S!ckick, Madeon, Capozzi, Nitti Gritti, Boombox Cartel, SNBRN, Dillon Francis, and DJ Pauly D. Showcasing versatility and ability to cater to different crowds.</p>
              <p className='py-2 text-lg font-semibold'>Matsu.MOTO sets are characterized by infectious beats, booty shaking bass, and a keen eye for what the crowd wants. Whether playing for thousands at a club or a for a smaller crowd in more intimate venues, Matsu.MOTO never fails to keep the energy high and the dance floor moving.</p>
              <p className='py-2 text-lg font-semibold'>With his passion for music, the EDM culture, and the dedication to his sets, Matsu.MOTO will keep you bouncing, shuffling, fan clacking, and even woot-wooting on the dance floor.</p>
            </div>
          </div>
          <div className='w-fit h-auto m-auto shadow-2xl col-span-2 shadow-gray-950 flex items-center justify-center'>
            <Image src={bioPic} width="828" height="552" alt="bio pic" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio;