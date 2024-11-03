import React from 'react'
import styles from '../style'
import { feedback } from '../constants'
import FeedbackCard from './FeadbackCard'

const Testimonials = () => {
  return (
    <section id='clients' className={`${styles.paddingY} relative`}>
      <div className="flex flex-col gap-5 mb-20 md:flex-row md:items-center md:justify-between z-[1]">
        <h2 className="flex-1 uppercase font-semibold font-poppins sm:text-5xl sm:leading-[81px] text-4xl leading-[65px] text-white">
        What people are <br className='hidden sm:block'/> saying about us
        </h2>
        <p className="text-[15px] sm:text-[18px] text-white/70 font-poppins font-normal leading-8 flex-1">
        Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className={`flex items-center flex-row flex-wrap z-[1]`}>
        {
          feedback.map((feedbackItem, index) => (
            <FeedbackCard key={feedbackItem.id} {...feedbackItem}/>
          ))
        }
      </div>
      <div className='absolute top-[-5%] right-[-20%] w-[40%] h-[90%] blue__gradient z-[0]'/>
    </section>
  )
}

export default Testimonials
