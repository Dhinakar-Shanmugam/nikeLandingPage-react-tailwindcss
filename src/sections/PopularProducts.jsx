import React from 'react'
import {shoe4,shoe5,shoe6,shoe7} from '../assets/images'


const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='mt-16 flex sm:flex-col md:flex-row justify-between items-center'>
        <div>
            <img src={shoe4} className='sm:mt-11'/>
            <p className='mt-7 font-montserrat'>Rating ( 4.5 )</p>
            <h3 className='font-montserrat font-bold text-2xl mt-2'>Nike Air Jordan-01</h3>
            <p className='text-coral-red font-montserrat mt-2 font-bold'>$200.20</p>
        </div>
        <div>
            <img src={shoe5} className='sm:mt-11'/>
            <p className='mt-7 font-montserrat'>Rating ( 4.5 )</p>
            <h3 className='font-montserrat font-bold text-2xl mt-2'>Nike Air Jordan-10</h3>
            <p className='text-coral-red font-montserrat mt-2 font-bold'>$210.20</p>
        </div>
        <div>
            <img src={shoe6} className='sm:mt-11'/>
            <p className='mt-7 font-montserrat'>Rating ( 4.5 )</p>
            <h3 className='font-montserrat font-bold text-2xl mt-2'>Nike Air Jordan-100</h3>
            <p className='text-coral-red font-montserrat mt-2 font-bold'>$220.20</p>
        </div>
        <div>
            <img src={shoe7} className='sm:mt-11'/>
            <p className='mt-7 font-montserrat'>Rating ( 4.5 )</p>
            <h3 className='font-montserrat font-bold text-2xl mt-2'>Nike Air Jordan-001</h3>
            <p className='text-coral-red font-montserrat mt-2 font-bold'>$230.20</p>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
