import AboutMeMain from './components/aboutMeSection/AboutMeMain'
import ContactMe from './components/contactMeSection/ContactMe'
import ExperienceSection from './components/Experience/ExperienceSection'
import FooterMain from './components/footer/FooterMain'

import HeroMain from './components/heroSection/HeroMain'
import NavbarMain from './components/navbar/NavbarMain'
import ProjectsSection from './components/projectSection/ProjectSection'
import SkillsExtraPage from './components/skillsSection/SkillsExtraPage'
import SkillsMain from './components/skillsSection/SkillsMain'
import SubSkills from './components/skillsSection/SubSkills'

function App() {
  return (
    <main className='font-body overflow-x-hidden'>
      <NavbarMain/>
      <HeroMain />
      <AboutMeMain/>
      <SkillsMain/>
      <SubSkills/>
      <SkillsExtraPage/>
      <ExperienceSection/>
      <ProjectsSection/>
      <ContactMe/>
      <FooterMain/>

      
    </main>
  )
}

export default App
