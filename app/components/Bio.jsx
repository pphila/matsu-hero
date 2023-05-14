import React from 'react';
import Image from 'next/image';
import bioPic from './../../public/assets/img/matsu.MOTO-bio.jpg';

const Bio = () => {
  return (
    <>
      <div id='bio' className='bg-gray-50/20 text-gray-50 w-full md:h-screen p-2 py-16'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-2'>
          <div className='col-span-2 grid justify-center align-middle mt-16'>
            <h1 className='text-6xl text-center'>Biography</h1>
            <p className='py-2 font-semibold'>I am DJ Matsu.MOTO, Portland based artist originally from Honolulu, Hawaii. I am an up an coming DJ playing at local venues and a residency at Portland's premiere EDM club 45 East. Opening for big names such as Valentino Kahn and Audien. Mixing big room bass & booty shaking house. lore</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptatum quos inventore doloribus reprehenderit esse sunt laborum magni, molestiae vel sequi nihil numquam porro, ipsam rem asperiores, repellendus ea eos!</p>
          </div>
          <div className='w-full h-auto m-auto shadow-2xl col-span-2 shadow-gray-950 flex items-center justify-center hover:scale-110 ease-in duration-200'>
            <Image src={bioPic} width="828" height="552" alt="bio pic" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Bio;