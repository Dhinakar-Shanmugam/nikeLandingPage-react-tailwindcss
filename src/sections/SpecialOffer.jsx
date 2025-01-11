import React from 'react'
import {offer} from '../assets/images'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 
                        max-container'>
        
        <div className='flex-1'>
            <img src={offer} width={773} height={687} className='object-contain w-full' />
        </div>


        <div className='flex flex-1 flex-col md:ml-20'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'> 
          <span className='text-coral-red'>
            Special</span> Offer
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
        Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className=' flex flex-row space-x-4 mt-11'>
        <button className="flex justify-center items-center gap-2 px-7 py-4 border
                font-montserrat text-lg leading-none bg-coral-red rounded-full text-white border-coral-red"
        >Shop Now</button>
        <button className="flex justify-center items-center gap-2 px-7 py-4 border
                font-montserrat text-lg leading-none bg-white rounded-full text-slate-gray border-slate-gray"
        >Learn More</button>
        </div>

      </div>


       
    </section>
  )
}

export default SpecialOffer
