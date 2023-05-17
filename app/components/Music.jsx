import React from 'react';
import Image from 'next/image';
import musicPic from './../../public/assets/img/matsu-music.jpg';

const Music = () => {
  return (
    <>
      <div id='music' className='w-full md:h-screen p-2 py-16'>
        <div className='py-20'>
          <h1 className='max-w-[1240px] m-auto text-6xl text-center pb-8 subpixel-antialiased tracking-widest'>Mixes</h1>
          <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            
            <div className='col-span-2'>
              <div className='w-full h-auto m-auto shadow-2xl shadow-gray-950 flex items-center justify-center'>
                <Image className='rounded-sm' src={musicPic} width="828" height="552" alt="bio pic" />
              </div>
            </div>
            <div className='pt-[60]'>
              <iframe width="100%" height="544" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/matsudotmoto&amp;"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Music;