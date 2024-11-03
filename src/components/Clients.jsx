import React from 'react'
import styles from '../style'
import { clients } from '../constants'
import { dropbox, airbnb, binance, coinbase } from '../assets'

const Clients = () => (
  <section className={`${styles.paddingX} ${styles.paddingY}`}>
    <ul className='flex flex-wrap items-center justify-center gap-5 ss:justify-between'>
      {
        clients.map((clientItem) => (
          <li key={clientItem.id} className='max-w-[192px]'>
            <img src={clientItem.logo} alt="logo" className='object-contain h-[60px]'/>
          </li>
        ))
      }
    </ul>
  </section>
)

export default Clients
