import React from 'react'
import { motion } from 'framer-motion'
import { FaMedal, FaTrophy } from 'react-icons/fa'


const neonGlow = {
  boxShadow: '0 0 10px rgba(255,255,255,0.05), 0 0 20px rgba(240,169,79,0.1), 0 0 30px rgba(94,206,220,0.15)',
}


const gridItems = [
  {
    icon: <FaMedal className="text-2xl text-orange" />,
    title: 'Machine Learning A-Z',
    desc: '43 Hours of intensive AI & Python practice.',
  },
  {
    icon: <FaMedal className="text-2xl text-orange" />,
    title: 'Web Development Bootcamp',
    desc: '79.5 Hours covering HTML, CSS, JS, React.',
  },
  {
    icon: <FaMedal className="text-2xl text-orange" />,
    title: 'C++ Foundations',
    desc: '46 Hours — Beginner to Beyond mastery.',
  },
  {
    icon: <FaTrophy className="text-2xl text-cyan" />,
    title: 'Silverzone Science',
    desc: '🥇 School Rank 1, 🥈 State Rank 7',
  },
  {
    icon: <FaTrophy className="text-2xl text-cyan" />,
    title: 'Aptitude Olympiad',
    desc: '🥇 School Rank 1, 🥈 State Rank 6',
  },
  {
    icon: <FaTrophy className="text-2xl text-cyan" />,
    title: 'SOF IMO & NSO',
    desc: 'IMO 🥇 School Rank 1 | NSO 🥈 School Rank 2',
  },
]

const AboutMeAchievements = () => {
  return (
    <div className="w-full px-6 py-24 text-white flex flex-col items-center gap-10">

      
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-2xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-orange to-cyan bg-clip-text text-transparent tracking-tight"
      >
        Wins Along the Way
      </motion.h2>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {gridItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            style={neonGlow}
            className="bg-white/5 backdrop-blur-md p-3 rounded-xl transition-all hover:scale-105 hover:shadow-cyanShadow duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              {React.cloneElement(item.icon, { className: 'text-lg ' + item.icon.props.className.split(' ').filter(c => c !== 'text-2xl').join(' ') })}
              <h3 className="text-base font-semibold tracking-wide">{item.title}</h3>
            </div>
            <p className="text-white/70 text-xs">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AboutMeAchievements
