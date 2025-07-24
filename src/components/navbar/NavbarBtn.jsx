import React from 'react'
import { FaDownload } from "react-icons/fa"

const NavbarBtn = () => {
  return (
    <a
      href="/Eshita_Gupta_Resume.pdf"
      download
      className="inline-block"
    >
      <button className='px-2 py-1 rounded-full text-base font-bold text-white border-cyan border flex items-center gap-0.5 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow'>
        Download Resume
        <div className='sm:hidden md:block'>
          <FaDownload />
        </div>
      </button>
    </a>
  )
}

export default NavbarBtn
