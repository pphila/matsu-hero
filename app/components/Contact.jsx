import React from 'react';
import Link from 'next/link';
import { TfiAngleDoubleUp } from 'react-icons/tfi';
import Image from 'next/image';
import contactPic from './../../public/assets/img/matsu.MOTO-contact.jpg';

const Contact = () => {
  return(
    <>
      <div className='w-full lg:h-screen text-center'>
        <div className='max-w-[1240px] m-auto px-2 py-8 w-full'>
          
          <div className='py-4'>
            <h1 className="text-6xl text-center">Contact Me:</h1>
            <p>Contact me for availibility on your next event!</p>
          </div>

          <div className='grid lg:grid-cols-5 gap-8 pt-16'>
            
            <div className='col-span-3 lg:col-span-2 w-full h-full'>
              <div className='flex justify-center items-center shadow-2xl shadow-gray-950 w-fit h-fit'>
                <Image src={contactPic} width="360" height="600" alt="/" />
              </div>
            </div>

            <div className='bg-gray-800/75 col-span-3 w-full h-auto shadow-xl shadow-gray-950 rounded-md lg:p-4'>
              <div className='p-4'>
                <form>
                  <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Name</label>
                      <input className='border-2 rounded-md p-3 flex border-gray-300' type="text" name="" />
                    </div>
                    <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2'>Phone Number</label>
                      <input className='border-2 rounded-md p-3 flex border-gray-300' type="text" name="" />
                    </div>
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-md p-3 flex border-gray-300' type="email" name="" />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-md p-3 flex border-gray-300' type="text" name="" />
                  </div>
                  <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-md p-3 border-gray-300' rows="10"/>
                  </div>
                  <button className='w-full p-4 text-gray-100 mt-4'>Send</button>
                </form>
              </div>
            </div>

          </div>
          
          <div className='flex justify-center py-12'>
            <Link href="/">
              <div className='bg-white text-gray-900 rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                <TfiAngleDoubleUp size={30}/>
              </div>
            </Link>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact;