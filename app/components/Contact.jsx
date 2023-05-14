import React from 'react';
import Image from 'next/image';

const Contact = () => {
  return(
    <>
      <div className='w-full lg:h-screen text-center'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
          
          <div className='py-4'>
            <h1 className="text-6xl text-center">Contact Me:</h1>
            <p>Contact me for availibility on your next event!</p>
          </div>

          <div className='grid lg:grid-cols-5 gap-8'>
            <div className='lg:p-4 h-full'>
              <div>
                <Image />
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact;