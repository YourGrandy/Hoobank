import React from 'react'
import GetStarted from './GetStarted'

import styles from './../style'
import { discount, robot } from '../assets'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div 
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px] mr-2'/>
          <p className={`${styles.paragraph}`}>
            <span className='text-white'>20%</span> Discount for {' '}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='text-white ss:text-[72px] text-[52px] font-semibold max-w-[670px] font-poppins flex-1 ss:leading-[100px] leading-[75px]'>
          The Next <br className='sm:block hidden'/> {' '}
          <span className='text-gradient'>Generation</span> <br className='sm:block hidden'/> {' '}
          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted/>
          </div>

        </div>

        <h2 className='text-white ss:text-[68px] text-[52px] font-semibold font-poppins flex-1 ss:leading-[100px] leading-[75px] w-full'>
          Payment Method.
        </h2>
        <p className={`max-w-[470px] ${styles.paragraph} mt-5`}>
          Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.
        </p>

      </div>

      <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="robot" className='w-[100%] h-[100%] relative z-[5] object-contain'/>

        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] top-0 bottom-40 white__gradient'/>
        <div className='absolute z-[1] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted/>
      </div>
    </section>
  )
}

export default Hero
