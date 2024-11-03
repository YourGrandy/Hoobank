import React from 'react'
import styles from '../style'
import Button from './Button'

const CTA = () => (
  <section className={`flex justify-between items-center ${styles.marginY} ${styles.paddingX} ${styles.paddingY} flex-wrap gap-5 bg-black-gradient rounded-[20px]`}>
    <div className="flex flex-col max-w-[670px]">
      <h2 className={styles.heading2}>
      Let’s try our service now!
      </h2>
      <p className={styles.paragraph}>
      Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>
    <Button />
  </section>
)

export default CTA
