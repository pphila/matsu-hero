import React from 'react';
import Image from 'next/image';
import Img1 from './../../public/assets/img/photoGallery/matsu-img-1.jpg';
import Img2 from './../../public/assets/img/photoGallery/matsu-img-2.jpg';
import Img3 from './../../public/assets/img/photoGallery/matsu-img-3.jpg';
import Img4 from './../../public/assets/img/photoGallery/matsu-img-4.jpg';
import Img5 from './../../public/assets/img/photoGallery/matsu-img-5.jpg';
import Img6 from './../../public/assets/img/photoGallery/matsu-img-6.jpg';


const PhotoReel = () => {
  return(
    <>
      <div id='photos' className='bg-gray-50 w-full lg:h-screen md:h-auto text-center pb-20'>
        <div className='py-20'>
            <h1 className="text-6xl text-gray-950 text-center py-6 tracking-widest">Photos</h1>
        </div>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-6 pt-10'>
          
          <div className='w-fit m-auto shadow-lg shadow-gray-900 flex items-center justify-center hover:scale-110 ease-in duration-200'>
            <Image src={Img1} width="400" height="250" alt='/'/>
          </div>
          <div className='w-fit m-auto shadow-lg shadow-gray-900 flex items-center justify-center hover:scale-110 ease-in duration-200'>
            <Image src={Img2} width="400" height="250" alt='/'/>
          </div>
          <div className='w-fit m-auto shadow-lg shadow-gray-900 flex items-center justify-center hover:scale-110 ease-in duration-200'>
            <Image src={Img3} width="400" height="250" alt='/'/>
          </div>
          <div className='w-fit m-auto shadow-lg shadow-gray-900 flex items-center justify-center hover:scale-110 ease-in duration-200'>
            <Image src={Img4} width="400" height="250" alt='/'/>
          </div>
          <div className='w-fit m-auto shadow-lg shadow-gray-900 flex items-center justify-center hover:scale-110 ease-in duration-200'>
            <Image src={Img5} width="400" height="250" alt='/'/>
          </div>
          <div className='w-fit m-auto shadow-lg shadow-gray-900 flex items-center justify-center hover:scale-110 ease-in duration-200'>
            <Image src={Img6} width="400" height="250" alt='/'/>
          </div>

        </div>
      </div>
    </>
  )
}

export default PhotoReel;