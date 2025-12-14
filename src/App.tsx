import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Timeline from './sections/Timeline'
import Skills from './sections/Skills'
import Stack from './sections/Stack'
import RecentTech from './sections/RecentTech'
import Methods from './sections/Methods'
import Values from './sections/Values'
import Capabilities from './sections/Capabilities'
import ToolsFav from './sections/ToolsFav'
import Certifications from './sections/Certifications'
import Experience from './sections/Experience'
import BeforeAfter from './sections/BeforeAfter'
import Projects from './sections/Projects'
import Realizations from './sections/Realizations'
import Services from './sections/Services'
import Synthesis from './sections/Synthesis'
import Downloads from './sections/Downloads'
import CvSection from './sections/CvSection'
import Notes from './sections/Notes'

import AboutSite from './sections/AboutSite'
import Objectives from './sections/Objectives'
import QuickContact from './sections/QuickContact'
import Contact from './sections/Contact'

function App() {
  const navLinks = useMemo(
    () => [
      { label: 'Accueil', href: '#hero' },
      { label: 'À propos', href: '#about' },
      { label: 'Parcours', href: '#timeline' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Projets', href: '#projects' },
      { label: 'E5', href: '#realizations' },
      { label: 'Contact', href: '#contact' },
    ],
    [],
  )

  return (
    <div className="min-h-screen bg-white text-slate-900 transition-colors duration-300">
      <div className="fixed inset-x-0 top-0 -z-10 h-[500px] bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      <Navbar links={navLinks} />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Timeline />
        <Certifications />
        <Skills />
        <Stack />
        <RecentTech />
        <Methods />
        <Values />
        <Capabilities />
        <ToolsFav />
        <Experience />
        <BeforeAfter />
        <Projects />
        <Realizations />
        <Services />
        <Synthesis />
        <Downloads />
        <CvSection />
        <Notes />

        <AboutSite />
        <Objectives />
        <QuickContact />
        <Contact />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App

