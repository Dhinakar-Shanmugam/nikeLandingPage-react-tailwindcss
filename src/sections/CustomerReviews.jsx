import React from 'react'
import { customer1,customer2 } from '../assets/images'

const CustomerReviews = () => {
  return (
  <section className='max-container'>
        <h3 className='font-palanquin text-center text-4xl font-bold'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say? 
        </h3>
        <p className='info-text m-auto mt-4 max-w-lg text-center'>
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
        </p>

  <div className='mt-24 flex sm:flex-col md:flex-row flex-1 justify-evenly items-center gap-14'>

          
    <div className='flex justify-center items-center flex-col'>
      <img
        src={customer1}
        alt='customer1'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />

       <p className='mt-6 max-w-sm text-center info-text'>The attention to detail and the quality of the product 
        exceeded my expectations. Highly recommended!</p>

        <p className='text-xl font-montserrat text-slate-gray font-bold mt-3'>Rating (4.5)</p>
      
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        Morich Brown
      </h3>
    </div>



    <div className='flex justify-center items-center flex-col'>
      <img
        src={customer2}
        alt='customer1'
        className='rounded-full object-cover w-[120px] h-[120px]'
      />

       <p className='mt-6 max-w-sm text-center info-text'>The product not only met but exceeded my expectations. 
        I'll definitely be a returning customer!</p>

        <p className='text-xl font-montserrat text-slate-gray font-bold mt-3'>Rating (4.5)</p>
      
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
         Lota Mongeskar
      </h3>
    </div>



    </div>
  </section>
  )
}

export default CustomerReviews
