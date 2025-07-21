import React, { useEffect, useState } from 'react'
import { FaInstagram, FaLinkedin, FaGithub, FaPhone } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { motion, useScroll, useTransform } from 'framer-motion'
const HeroText = () => {
  const { scrollYProgress } = useScroll()
  const [greeting, setGreeting] = useState('')
  const [emoji, setEmoji] = useState('☀️')
  
  // Scroll-based animations
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8])
  const textScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95])
  const socialIconsY = useTransform(scrollYProgress, [0, 0.4], [0, 20])

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour >= 3 && hour < 11) {
        setGreeting('Good Morning');
        setEmoji('🌞');
    }else if (hour >= 11 && hour < 17) {
        setGreeting('Good Afternoon');
        setEmoji('🌤️');
    } else {
        setGreeting('Good Evening');
        setEmoji('🌙');
}
  }, [])

  const titles = [
    "Computer Science Engineering Student",
    "Frontend Explorer",
    "Tech Enthusiast"
  ]

  const [text, setText] = useState('')
  const [titleIndex, setTitleIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const currentTitle = titles[titleIndex]
    if (charIndex < currentTitle.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentTitle[charIndex])
        setCharIndex(charIndex + 1)
      }, 80)
      return () => clearTimeout(timeout)
    } else {
      const pause = setTimeout(() => {
        setText('')
        setCharIndex(0)
        setTitleIndex((titleIndex + 1) % titles.length)
      }, 1500)
      return () => clearTimeout(pause)
    }
  }, [charIndex, titleIndex])


const [toastMessage, setToastMessage] = useState('')
const [showToast, setShowToast] = useState(false)

const copyToClipboard = (text, type) => {
  navigator.clipboard.writeText(text)
  setToastMessage(`${type} copied!`)
  setShowToast(true)
  setTimeout(() => setShowToast(false), 2000)
}
  return (
    <motion.div 
      className="flex flex-col gap-4 h-full justify-center md:text-left md:mr-[100px] sm:text-center animate-fadeIn"
      style={{ opacity: textOpacity, scale: textScale }}
    >
      <motion.h2 
        className='lg:text-2xl sm:text-xl uppercase text-cyan tracking-wide flex items-center gap-2'
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {emoji} <span>{greeting}, I'm</span>
      </motion.h2>

      <motion.h1 
        className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-orange relative inline-block hover:scale-105 transition-transform duration-300'
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileHover={{ 
          scale: 1.05,
          textShadow: "0 0 20px rgba(251, 151, 24, 0.5)"
        }}
      >
        <span className="relative z-10">Eshita Gupta</span>
        <motion.span 
          className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-yellow-500 to-orange-500 blur-md rounded-full -z-10"
          animate={{ 
            scaleX: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        ></motion.span>
      </motion.h1>

      <p className='text-lg mt-4 text-white leading-relaxed'>
        I'm a <span className="font-semibold text-cyan-100">{text}<span className="blinking-cursor">|</span></span><br />
        I love <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-transparent bg-clip-text font-semibold">
          crafting user-friendly digital experiences
        </span> and solving real-world<br />
        problems. Always exploring <span className="italic text-cyan-300">new tech</span> to make a <span>meaningful impact</span>.
      </p>



        <motion.div 
          className="flex items-center gap-5 mt-2 text-[1.4rem] md:justify-start sm:justify-center"
          style={{ y: socialIconsY }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
            {/* LinkedIn */}
            <motion.a
                href="https://www.linkedin.com/in/eshita-gupta-98a56428a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-2 transition-all duration-500 ease-in-out"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaLinkedin className="text-white group-hover:text-[#0A66C2] group-hover:scale-115 transition-transform duration-500 z-10" />
                <span className="absolute inset-0 rounded-full border-2 border-[#0A66C2] scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
            </motion.a>
            {/* Email */}
            <motion.button
            onClick={() => copyToClipboard('eshita2111@email.com', 'Email')}
            className="group relative flex items-center justify-center p-2 transition-all duration-500 ease-in-out"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.95 }}
            >
            <HiOutlineMail className="text-white group-hover:text-[#EA4335] group-hover:scale-115 transition-transform duration-500 z-10" />
            <span className="absolute inset-0 rounded-full border-2 border-[#EA4335] scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
            </motion.button>
            {/* Phone */}
            <motion.button
            onClick={() => copyToClipboard('+919654421590', 'Phone number')}
            className="group relative flex items-center justify-center p-2 transition-all duration-500 ease-in-out"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            >
            <FaPhone className="text-white group-hover:text-[#25D366] group-hover:scale-115 transition-transform duration-500 z-10" />
            <span className="absolute inset-0 rounded-full border-2 border-[#25D366] scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
            </motion.button>
            {/* GitHub */}
            <motion.a
                href="https://github.com/eshitaguptaa"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-2 transition-all duration-500 ease-in-out"
                whileHover={{ scale: 1.2, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaGithub className="text-white group-hover:text-[#333] group-hover:scale-115 transition-transform duration-500 z-10" />
                <span className="absolute inset-0 rounded-full border-2 border-[#333] scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"></span>
            </motion.a> 
        </motion.div>
            {showToast && (
                <div
                    className="absolute bottom-6 left-1/3 transform -translate-x-1/2 border-cyan border bg-gradient-to-r from-cyan to-orange text-white px-4 py-2 rounded-full shadow-lg z-50
                            transition-all duration-500 ease-in-out opacity-0 scale-95 animate-fadeInOut"
                >
                    {toastMessage}
                </div>
            )}
    </motion.div>
  )
}

export default HeroText
