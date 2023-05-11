import React from 'react';
import Image from 'next/image';
import musicPic from './../../public/assets/img/matsu-music.jpg';

const Music = () => {
  return (
    <>
      <div className='w-full md:h-screen p-2 py-16'>
        <h1 className='max-w-[1240px] m-auto text-6xl text-left pb-2'>Music</h1>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
          <div className='col-span-2'>
            <div className='w-full h-auto m-auto shadow-2xl shadow-gray-400 flex items-center justify-center'>
              <Image className='rounded-sm' src={musicPic} width="828" height="552" alt="bio pic" />
            </div>
          </div>
          <div className='pt-[60]'>
            <iframe width="100%" height="544" scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/matsudotmoto&amp;"></iframe>
          </div>
        </div>
      </div>
    </>
  )
}

export default Music;