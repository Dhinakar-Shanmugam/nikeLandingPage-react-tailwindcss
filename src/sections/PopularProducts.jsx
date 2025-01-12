import React from 'react'
import { shoe4, shoe5, shoe6, shoe7 } from '../assets/images'

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          Our <span className="text-coral-red"> Popular </span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 
                      grid-cols-1 sm:gap-6 gap-14">

        <div className="flex flex-1 flex-col w-full max-sm:w-full">
          <img src={shoe4} className="w-[282px] h-[282px]" />
          <p className="mt-2 font-montserrat text-xl leading-normal text-slate-gray">Rating ( 4.5 )</p>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-01</h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            $200.20</p>
        </div>

        <div className="flex flex-1 flex-col w-full max-sm:w-full">
          <img src={shoe5} className="w-[282px] h-[282px]" />
          <p className="mt-2 font-montserrat text-xl leading-normal text-slate-gray">
            Rating ( 4.5 )</p>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-10</h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            $210.20</p>
        </div>

        <div className="flex flex-1 flex-col w-full max-sm:w-full">
          <img src={shoe6} className="w-[282px] h-[282px]" />
          <p className="mt-2 font-montserrat text-xl leading-normal text-slate-gray">
            Rating ( 4.5 )</p>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-100</h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            $220.20</p>
        </div>

        <div className="flex flex-1 flex-col w-full max-sm:w-full">
          <img src={shoe7} className="w-[282px] h-[282px]" />
          <p className="mt-2 font-montserrat text-xl leading-normal text-slate-gray">
            Rating ( 4.5 )</p>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
            Nike Air Jordan-001</h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal">
            $230.20</p>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
