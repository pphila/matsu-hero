"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import smLogo from './../../public/assets/img/matsu.MOTO-Square.jpg';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { SiTwitter, SiInstagram, SiSoundcloud } from 'react-icons/si';


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav);
  }
  
  return (
    <>
      <div className='fixed w-full bg-white text-gray-950 font-semibold h-28 shadow-xl z-[100]'>
        
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
          <Image src={smLogo} alt="/" width="112" height="112"/>
          <div className='float-left'>
            <ul className='hidden md:flex'>
              <Link href='/#hero'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
              </Link>
              <Link href='/#bio'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Bio</li>
              </Link>
              <Link href='/#music'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Music</li>
              </Link>
              <Link href='/#photos'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Photo</li>
              </Link>
              <Link href='/#contact'>
                <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
              </Link>
            </ul>
          </div>
            <div className='float-right'>
              <div className='hidden md:flex justify-end  my-4 w-full sm:w-[80%]'>
                <div className='rounded-full shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                  <a href="mailto:djmatsu.moto808@gmail.com"><HiOutlineMail /></a>
                </div>
                <div className='rounded-full shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                  <a href="https://twitter.com/matsudotmoto"><SiTwitter /></a>
                </div>
                <div className='rounded-full shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                  <a href="https://www.instagram.com/matsudotmoto/"><SiInstagram /></a>
                </div>
                <div className='rounded-full shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                  <a href="https://soundcloud.com/matsudotmoto"><SiSoundcloud /></a>
                </div>
              </div>
            </div>
            <div onClick={handleNav} className='md:hidden'>
              <AiOutlineMenu size={25} />
            </div>
        </div>

        {/* Hamburger menu */}
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] p-10 ease-in duration-500'}>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Image src={smLogo} alt='/' width='80' height='80' />
                <div onClick={handleNav} className='rounded-full shadow-md shadow-gray-400 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray-300 my-4'>
                <p className='w-[85%] md:w-[90%] font-semibold py-4'>Epic House Beats</p>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                  <Link href='/#hero'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Home</li>
                  </Link>
                  <Link href='/#bio'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Bio</li>
                  </Link>
                  <Link href='/#music'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Music</li>
                  </Link>
                  <Link href='/#photos'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Photos</li>
                  </Link>
                  <Link href='/#contact'>
                    <li onClick={() => setNav(false)} className='py-4 text-sm'>Contact</li>
                  </Link>
                </ul>

                <div className='pt-40'>
                  <p className='uppercase tracking-widest color-[#394867] font-semibold'>Socials</p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <a href="mailto: djmatsu.moto808@gmail.com"><HiOutlineMail /></a>
                    </div>
                    <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <a href="https://twitter.com/matsudotmoto"><SiTwitter /></a>
                    </div>
                    <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <a href="https://www.instagram.com/matsudotmoto/"><SiInstagram /></a>
                    </div>
                    <div className='rounded-full shadow-lg p-3 cursor-pointer hover:scale-105 ease-in duration-100'>
                      <a href="https://soundcloud.com/matsudotmoto"><SiSoundcloud /></a>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar