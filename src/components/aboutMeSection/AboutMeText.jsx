import React from 'react'
import { FaUniversity, FaSchool, FaNetworkWired } from 'react-icons/fa'
import { motion } from 'framer-motion'

const AboutMeText = () => {
  return (
    <div className="w-full px-4 flex flex-col items-center justify-center text-white gap-10 py-8">

      
      <h2 className="text-2xl md:text-4xl font-extrabold bg-gradient-to-r from-orange to-cyan text-transparent bg-clip-text tracking-tight drop-shadow-sm text-center">
        My Journey
      </h2>

      
      <div className="flex flex-col gap-10 w-full max-w-2xl">

        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.25, delay: 0.1, type: 'spring', stiffness: 200, damping: 15 }} className="relative bg-white/5 border-l-4 border-orange rounded-xl p-5 md:p-8 shadow-lg hover:shadow-orange/70 transition-all duration-500 group backdrop-blur-md">
          <div className="absolute -top-3 left-3 bg-orange rounded-full p-3 shadow-xl">
            <FaNetworkWired className="text-white text-lg group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-base font-semibold mt-2">Internship: Nokia</h3>
          <p className="text-white/80 text-xs mt-2">May–June 2025 | Noida</p>
          <ul className="list-disc ml-6 mt-2 space-y-1 text-white/70 text-xs">
            <li>Worked in CNS on Cybersecurity, Cloud infra</li>
            <li>Hands-on with Nokia automation tools & ESG strategy</li>
            <li>Secure network demos + Industry exposure</li>
          </ul>
        </motion.div>

        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.25, delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }} className="relative bg-white/5 border-l-4 border-cyan rounded-xl p-5 md:p-8 shadow-lg hover:shadow-cyan/70 transition-all duration-500 group backdrop-blur-md">
          <div className="absolute -top-3 left-3 bg-cyan rounded-full p-3 shadow-xl">
            <FaUniversity className="text-white text-lg group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-base font-semibold mt-2">College: VIT Chennai</h3>
          <p className="text-white/80 text-xs mt-2">2023–Present | B.Tech CSE</p>
          <p className="text-white/60 text-xs mt-1">Current CGPA: 8.44 / 10</p>
        </motion.div>

        
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.03 }} transition={{ duration: 0.25, delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }} className="relative bg-white/5 border-l-4 border-orange rounded-xl p-5 md:p-8 shadow-lg hover:shadow-orange/70 transition-all duration-500 group backdrop-blur-md">
          <div className="absolute -top-3 left-3 bg-orange rounded-full p-3 shadow-xl">
            <FaSchool className="text-white text-lg group-hover:scale-110 transition-transform" />
          </div>
          <h3 className="text-base font-semibold mt-2">School: MRIS Gurugram</h3>
          <p className="text-white/80 text-xs mt-2">2019–2023 | CBSE Board</p>
          <p className="text-white/60 text-xs mt-1">Class X: 96% &nbsp;|&nbsp; Class XII: 93%</p>
        </motion.div>
      </div>

      

    </div>
  )
}

export default AboutMeText
