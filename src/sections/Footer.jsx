import React from 'react'
import {footerLogo} from '../assets/images'
import {facebook,instagram} from '../assets/icons'

const Footer = () => {
  return (
    <footer className='max-container'>
    <div className='flex justify-between items-start gap-20 flex-wrap max-lg:flex-col mb-4'>
      <div className='flex flex-col items-start'>
        <a href='/'>
          <img
            src={footerLogo}
            alt='logo'
            width={150}
            height={46}
            className='m-0'
          />
        </a>
        <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>
          Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
        </p>
        <div className='flex items-center gap-5 mt-8'>
  
            <div
              className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
            >
              <img src={facebook}  width={24} height={24} />
            </div>

            <div
              className='flex justify-center items-center w-12 h-12 bg-white rounded-full'
            >
              <img src={instagram} width={24} height={24} />
            </div>

      
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer
