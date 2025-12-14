import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BackToTopButton from './components/BackToTopButton'
import Hero from './sections/Hero'
import About from './sections/About'
import Timeline from './sections/Timeline'
import Skills from './sections/Skills'
import Certifications from './sections/Certifications'
import Projects from './sections/Projects'
import Contact from './sections/Contact'

function App() {
  const navLinks = useMemo(
    () => [
      { label: 'Page d\'accueil', href: '#hero' },
      { label: 'Mon Parcours', href: '#timeline' },
      { label: 'Certification', href: '#certifications' },
      { label: 'CV', href: '#cv-section' },
      { label: 'Compétence', href: '#skills' },
      { label: 'E4', href: '#projects' }, // E4 souvent Stages/Projets. Ici lié aux Réalisations.
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
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App

