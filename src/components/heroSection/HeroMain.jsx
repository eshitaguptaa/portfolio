import React from 'react'
import HeroPic from './HeroPic'
import HeroText from './HeroText'
import HeroGradient from './HeroGradient'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroMain = () => {
  const { scrollYProgress } = useScroll()
  
  // Parallax effects for different elements
  const textY = useTransform(scrollYProgress, [0, 1], [0, -100])
  const picY = useTransform(scrollYProgress, [0, 1], [0, 50])
  const gradientY = useTransform(scrollYProgress, [0, 1], [0, -150])
  
  // Scale effect for the entire hero section
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  
  // Opacity fade out effect
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }} 
      whileInView={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.25 }} 
      className='pt-32 pb-8 min-h-screen relative overflow-hidden overflow-x-hidden'
      style={{ scale: heroScale, opacity: heroOpacity }}
    >
        <div className='flex md:flex-row sm:flex-col max-w-[1100px] mx-auto justify-between items-center relative px-4 mt-16'>
            <motion.div style={{ y: textY }}>
            <HeroText/>
            </motion.div>
            <motion.div style={{ y: picY }}>
            <HeroPic/>
            </motion.div>
            <motion.div style={{ y: gradientY }}>
            <HeroGradient/>
            </motion.div>
        </div>
    </motion.div>
  )
}

export default HeroMain