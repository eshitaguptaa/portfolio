import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroGradient = () => {
  const { scrollYProgress } = useScroll()
  
  // Scroll-based animations for gradients
  const gradient1Y = useTransform(scrollYProgress, [0, 1], [0, -100])
  const gradient2Y = useTransform(scrollYProgress, [0, 1], [0, 50])
  const gradient3Y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const gradient4Y = useTransform(scrollYProgress, [0, 1], [0, 120])

  return (
    <div>
        <motion.div 
          className='shadow-cyanMediumShadow absolute top-0 right-[400px] -z-10'
          style={{ y: gradient1Y }}
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
          style={{ y: gradient2Y }}
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
          style={{ y: gradient3Y }}
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
          className='shadow-orangeMediumShadow absolute top-[500px] left-0 -z-10 opacity-50'
          style={{ y: gradient4Y }}
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