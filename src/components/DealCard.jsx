import React from 'react'
import Button from './Button'
import styles, { layout } from '../style'
import { card } from '../assets'

const DealCard = () => {
    return (
        <section className={`${layout.section} ${styles.flexCenter}`}>
          <div className={layout.sectionInfo}>
            <h2 
            className="uppercase font-poppins font-semibold sm:leading-[76px] sm:text-5xl leading-[56px] text-4xl mb-6 text-white"
            >
              Find a better card deal in few easy steps.
            </h2>
            <p
            className='text-white/70 font-poppins font-normal sm:text-[18px] sm:leading-[30px] leading-[25px] text-[14px]'
            >
              Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
            </p>
            <Button styles='mt-[17px]'/>
          </div>
          <div className={ layout.sectionImg }>
            <img src={card} alt="card" className="flex-1 w-[100%] h-[100%] object-contain" />
          </div>
        </section>
    )
}

export default DealCard
