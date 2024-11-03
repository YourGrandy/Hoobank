import React from 'react'
import styles from '../style'
import { quotes } from '../assets'

const FeadbackCard = ({ content, title, name, img }) => {
  return (
    <div className={`flex max-w-[370px] flex-col items-start justify-between feedback-card rounded-[20px] cursor-pointer px-10 py-12 md:mr-10 sm:mr-5 mr-0 my-5`}>
      <img src={quotes} alt="quotes" className="w-[42px] h-[27px] mb-10 object-contain" />
      <p className={`${styles.paragraph} text-white mb-[29px]`}>
      {content}
      </p>
      <div className='flex flex-row items-center gap-4'>
        <img src={img} alt="avatar" className="w-[48px] h-[48px] rounded-full object-contain" />
        <div className="flex flex-col items-start">
          <h3 className="font-normal text-white text-[20px] leading-[32px] font-poppins">{name}</h3>
          <p className="leading-6 uppercase text-white/70 font-poppins">{title}</p>
        </div>
      </div>
    </div>
  )
}

export default FeadbackCard
