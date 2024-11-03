import React from 'react'
import styles from '../style'
import { footerLinks, socialMedia } from '../constants'
import { logo } from '../assets'

const Footer = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col gap-9 w-full`}>
      <div className='flex flex-1 flex-col gap-[30px] sm:mb-5 mb-0'>
        <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} max-w-[350px]`}>
        A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex flex-row flex-[1.5] flex-wrap w-full items-start justify-between gap-7 sm:gap-5">
        {
          footerLinks.map((footerItem) => (
            <div key={footerItem.title} className={`${styles.flexStart} flex-col min-w-[150px]`}>
              <h3 className="font-medium text-white font-poppins text-[18px] leading-[27px] mb-6">
                {footerItem.title}
              </h3>
              <ul className="list-none">
                {
                  footerItem.links.map((link, index) => (
                    <li key={link.name} className={`${index !== footerItem.links.length - 1 ? 'mb-3' : null}`}>
                      <a href={link.link} className='text-[16px] font-poppins leading-[24px] text-dimWhite hover:text-secondary'>{link.name}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          ))
        }
      </div>
    </div>

    <div className="flex sm:justify-between items-center sm:flex-row flex-col mt-10 py-[30px] border-t-[#3F3E45] border-t w-full">
      <p className="text-[18px] font-poppins leading-[27px] text-white/60 mb-5 sm:mb-0">
      2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex items-center justify-between max-w-[176px] gap-[30px]">
        {
          socialMedia.map((media) => (
            <a key={media.id} href={media.link}>
              <img src={media.icon} alt="icon" className="w-[21px] h-[21px] object-contain" />
            </a>
          ))
        }
      </div>
    </div>
  </section>
)

export default Footer
