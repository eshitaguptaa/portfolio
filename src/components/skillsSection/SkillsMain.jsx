import React from 'react'
import AllSkills from './AllSkills'
import SkillsText from './SkillsText'
import AllSkillsSm from './AllSkillsSm'
import { motion } from 'framer-motion'

const SkillsMain = () => {
  return (
    <div id="skills">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className='max-w-[1200px] px-4 mx-auto min-h-[480px] relative overflow-hidden pb-0'>
        <div className='mb-16'><SkillsText/></div>
        <div className='w-full lg:block sm:hidden'>
          <AllSkills/>
        </div>
        <div className='sm:block lg:hidden'>
          <AllSkillsSm/>
        </div>
        
      </motion.div>
      
      
    </div>
  )
}

export default SkillsMain