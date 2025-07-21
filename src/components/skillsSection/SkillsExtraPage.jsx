import React from 'react';
import './SkillsExtraPage.css';
import { VscVscode } from "react-icons/vsc";
import { TbBrandMysql } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiAnaconda } from "react-icons/si";
import { MdOutlineDesignServices } from "react-icons/md";
import { motion } from 'framer-motion';

const orbitSkills = [
  { icon: <SiMongodb size={48} />, name: 'MongoDB' },
  { icon: <TbBrandMysql size={48} />, name: 'MySQL' },
  { icon: <FaGithub size={48} />, name: 'Git' },
  { icon: <VscVscode size={48} />, name: 'VS Code' },
  { icon: <SiCanva size={48} />, name: 'Canva' },
  { icon: <SiAnaconda size={48} />, name: 'Anaconda' },
  { icon: <SiFigma size={48} />, name: 'Figma' },
  { icon: <MdOutlineDesignServices size={48} />, name: 'UI/UX' }
];

const SkillsExtraPage = () => (
  <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="skills-page-container">
    <div className="ellipse-orbit">
      <div className="sun">Beyond the Core</div>
      <div className="orbit-ring"></div>
      {orbitSkills.map((item, idx) => {
        const angle = (360 / orbitSkills.length) * idx;
        return (
          <div
            key={idx}
            className="orbit-icon"
            style={{
              '--icon-angle': `${angle}deg`,
            }}
          >
            <div className="icon-wrapper">
              {item.icon}
              <div className="tooltip">{item.name}</div>
            </div>
          </div>
        );
      })}
    </div>
  </motion.div>
);

export default SkillsExtraPage;
