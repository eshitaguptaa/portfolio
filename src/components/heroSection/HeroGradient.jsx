import React from 'react'
import { motion } from 'framer-motion'

const HeroGradient = () => {
  return (
    <div>
        <motion.div 
          className='shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10'
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className='shadow-orangeMediumShadow absolute top-0 right-0 -z-10'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className='shadow-cyanMediumShadow absolute top-[300px] left-0 -z-10 opacity-50'
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        <motion.div 
          className='shadow-orangeMediumShadow absolute top-[650px] left-0 -z-10 opacity-50'
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
        />
    </div>
  )
}

export default HeroGradient