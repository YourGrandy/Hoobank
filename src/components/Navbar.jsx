import React, { useState } from 'react'

import { close, logo, menu } from './../assets'
import { navLinks } from './../constants'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex py-6 w-full justify-between items-center navbar'>
      <img src={logo} alt="hoobank" className='w-[124px] h-[32px]'/>
      <ul className="list-none sm:flex justify-end items-center flex-1 hidden">
        {
          navLinks.map((navItem, index) => (
            <li
            key={navItem.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
            >
              <a href={`#${navItem.id}`} className="">{navItem.title}</a>
            </li>
          ))
        }
      </ul>

      <div className="sm:hidden flex flex-1 items-center justify-end">
        <img src={toggle ? close : menu} onClick={() => setToggle((prevToggle) => !prevToggle)} alt="menu" className='w-[28px] h-[28px] cursor-pointer object-contain'/>

        <div className={`${toggle ? 'flex' : 'hidden'} 
        p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex-col justify-end items-center flex-1 flex">
            {
              navLinks.map((navItem, index) => (
                <li
                key={navItem.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                >
                  <a href={`#${navItem.id}`} className="">{navItem.title}</a>
                </li>
              ))
            }
          </ul>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
