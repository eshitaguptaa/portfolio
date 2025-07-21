import React from 'react'
import { FaJava, FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa"
import { PiFileCpp } from "react-icons/pi"
import { IoLogoPython } from "react-icons/io5"
import { AiOutlineJavaScript } from "react-icons/ai"
import { RiTailwindCssFill, RiNextjsFill } from "react-icons/ri"
import { SiFlask, SiMongodb } from "react-icons/si"
import { GrMysql } from "react-icons/gr"
import SingleSkill from './SingleSkill' // make sure this path is correct

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
  { skill: "MySQL", icon: GrMysql },
]

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item,index)=>{
            return <div key={index} className="flex flex-col items-center">
                <item.icon className='text-7xl text-orange'/>
                <p className='text-center mt-4 text-white'>{item.skill}</p>
            </div>
        })}
    </div>
  )
}

export default AllSkillsSM