import React from 'react'
import { layout } from './../style'
import styles from './../style'
import { bill, google, apple } from '../assets'

const Billing = () => {
  return (
    <section className={`${layout.sectionReverse} items-center`}>
      <div className={layout.sectionImgReverse}>
        <img 
        src={bill} 
        alt="bill" 
        className='w-[100%] h-[100%] object-contain relative z-[5]'
        />
        <div className=' absolute -left-1/2 top-0 w-[50%] h-[60%] z-3 rounded-full white__gradient'/>
        <div className=' absolute -left-1/2 bottom-0 w-[50%] h-[60%] z-1 rounded-full pink__gradient'/>
      </div>

      <div className="flex-col flex-1">
        <h2 className="mb-6 text-4xl font-semibold text-white uppercase sm:text-5xl font-poppins">Easily control your billing & invoicing.</h2>
        <p
        className='text-[18px] font-normal text-white/70 leading-[28px] font-poppins mb-12'
        >
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
        </p>
        <div className='flex items-center gap-8'>
          <img src={google} alt="google" className='cursor-pointer'/>
          <img src={apple} alt="apple" className='cursor-pointer'/>
        </div>
      </div>
    </section>
  )
}

export default Billing
