import React from 'react'
import styles from '../style'

const FeatureCard = ({ index, title, content, icon, length }) => {
  return (
    <div className={`flex cursor-pointer flex-row p-6 rounded-[20px] ${index !== length ? 'mb-10' : null} feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt="icon" className='w-[50%] h-[50%] object-contain'/>
      </div>
      <div className='flex flex-col flex-1 ml-3'>
        <h4 className="mb-2 text-lg font-semibold text-white font-poppins">{title}</h4>
        <p className="font-poppins font-normal text-[16px] leading-[18px] text-white/70">{content}</p>
      </div>
    </div>
  )
}

export default FeatureCard
