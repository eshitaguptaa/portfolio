import React from 'react'

import { Link } from 'react-scroll'
const links =[
  { link: "About Me", section: "about"},
  { link: "Skills", section: "skills"},
  { link: "Experience", section: "experience"},
  { link: "Projects", section: "projects"},
  { link: "Contact", section: "contact"},
]
const FooterMain = () => {
  return(
    <div className='px-4'>
      <div className='w-full h-[1px] bg-lightGrey mt-8'></div>
      <div className='md:flex sm:hidden justify-between mt-4 max-w-[1200px] mx-auto'>
        <p className='text-base text-lightGrey' >Eshita Gupta</p>
        <ul className='flex gap-2 text-lightGrey text-xs'>
          {links.map((item, index) => {
            return <li key={index}>
              <Link 
                to={item.section} 
                smooth={true} 
                duration={500} 
                className='hover:text-white transition-all duration-500 cursor-pointer'
              >
                {item.link}
              </Link>
              </li>
          })}
        </ul>
      </div>
      <p className='max-w-[1200px] mx-auto text-right mt-2 mb-4 text-[10px] text-lightBrown'>© 2025 Eshita Gupta | All Rights Reserved.</p>
    </div>
  )

}
export default FooterMain;
