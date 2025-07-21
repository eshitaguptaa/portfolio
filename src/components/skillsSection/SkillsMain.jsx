import React from 'react'
import AllSkills from './AllSkills'
import SkillsText from './SkillsText'
import AllSkillsSm from './AllSkillsSm'
import { motion } from 'framer-motion'

const SkillsMain = () => {
  return (
    <div id="skills">
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className='max-w-[1300px] px-4 mx-auto min-h-[600px] relative overflow-hidden'>
        <SkillsText/>
        <div className='bottom-[50px] absolute left-[50%] -translate-x-[50%] lg:block sm:hidden'>
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