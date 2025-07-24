import React from 'react'
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { PiFileCpp } from "react-icons/pi"
import { IoLogoPython } from "react-icons/io5"
import { AiOutlineJavaScript } from "react-icons/ai"
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri"
import { SiFlask, SiMongodb } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import SingleSkill from './SingleSkill'
import { FaCode } from 'react-icons/fa' // make sure this path is correct
import { motion } from 'framer-motion'

const skills = [
  { skill: "Java", icon: FaJava },
  { skill: "C++", icon: PiFileCpp },
  { skill: "Python", icon: IoLogoPython },
  { skill: "HTML", icon: FaHtml5 },
  { skill: "CSS", icon: FaCss3Alt },
  { skill: "JavaScript", icon: AiOutlineJavaScript },
  { skill: "React.js", icon: FaReact },
  { skill: "TailwindCSS", icon: RiTailwindCssFill },
  { skill: "Next.js", icon: RiNextjsFill },
  { skill: "Flask", icon: SiFlask },
  { skill: "MongoDB", icon: SiMongodb },
  { skill: "R", icon: FaCode },
]

const AllSkills = () => {
  return (
    <div>
      <motion.div
        className='flex items-center justify-center relative gap-1 max-w-[1200px] mx-auto'
        whileInView={{}}
      >
        {skills.map((item, index) => (
          <SingleSkill key={index} text={item.skill} imgSvg={<item.icon/>} />
        ))}
      </motion.div>
    </div>
  )
}

export default AllSkills