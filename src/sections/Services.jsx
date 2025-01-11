import React from 'react'
import {shieldTick,truckFast,support} from '../assets/icons'

const Services = () => {
  return (
    <section className='max-container flex justify-center flex-wrap gap-9'>
      
      <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={truckFast} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
      Free shipping
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
      Enjoy seamless shopping with our complimentary shipping service.
      </p>
    </div>


    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={shieldTick} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
        Secure Payment
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
        Experience worry-free transactions with our secure payment options.
      </p>
    </div>


    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
        <img src={support} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin text-3xl leading-normal font-bold'>
          Love to help you
      </h3>
      <p className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>
          Our dedicated team is here to assist you every step of the way.
      </p>
    </div> 

    </section>
  )
}

export default Services
