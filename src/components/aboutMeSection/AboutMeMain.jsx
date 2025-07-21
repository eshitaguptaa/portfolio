import React from 'react'
import AboutMeText from './AboutMeText'
import AboutMeAchievements from './AboutMeAchievements'
import { motion } from 'framer-motion'

const AboutMeMain = () => {
  return (
    
    <div id='about'className="flex flex-col gap-16 px-4 max-w-[1200px] mx-auto mt-[100px]">
      {/* About Me Text */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }}>
        <AboutMeText />
      </motion.div>
      {/* Achievements + Certifications BELOW */}
      <AboutMeAchievements />
    </div>
  )
}

export default AboutMeMain
