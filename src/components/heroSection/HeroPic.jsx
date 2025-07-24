import React from 'react'
import { PiHexagonThin } from "react-icons/pi"
import { motion, useScroll, useTransform } from 'framer-motion'

const HeroPic = () => {
  const { scrollYProgress } = useScroll()
  
  // Scroll-based animations for the image
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1])
  const imageRotate = useTransform(scrollYProgress, [0, 1], [0, 5])
  const hexagonRotate = useTransform(scrollYProgress, [0, 1], [0, 360])

  return (
    <div className='relative'>
      <div className='h-full flex items-center justify-center relative'>
        <motion.img 
        src="/images/HexaPic.png"
        alt="Eshita Gupta"
          className='max-h-[300px] w-auto relative z-10'
          style={{ scale: imageScale, rotate: imageRotate }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ 
            scale: 1.05,
            filter: "brightness(1.1)"
          }}
        />
        <motion.div 
          className='absolute -z-10 flex justify-center items-center'
          style={{ rotate: hexagonRotate }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <PiHexagonThin className='md:h-[90%] sm:h-[120%] min-h-[400px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]' />  
        </motion.div>
        </div>
      {/* Floating glow moved to top-left corner */}
      <motion.div
        className="absolute top-0 left-0 w-40 h-40 rounded-full bg-cyan/20 blur-3xl -z-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}

export default HeroPic