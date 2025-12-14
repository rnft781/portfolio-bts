import { useEffect, useState } from 'react'
import { ArrowRight, Mail, Phone } from 'lucide-react'

const phrases = ['Développeur web BTS SIO', 'Étudiant SLAM – promo 2025', 'Créateur de services 100 % locaux']

const Hero = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length)
    }, 2800)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="hero" className="mb-20 scroll-mt-28">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70 sm:p-12">
        <p className="mb-4 inline-flex items-center rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-700 dark:text-slate-300">
          BTS SIO · Spécialité SLAM · Promo 2025
        </p>

        <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl">
          Portfolio professionnel d&apos;Aurélien Frélaut
        </h1>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary" aria-live="polite">
          {phrases[currentPhrase]}
        </p>
        <p className="mt-6 text-lg text-slate-600 dark:text-slate-300">
          Étudiant passionné par le développement applicatif et la mise à disposition de services numériques.
          Ce portfolio présente les réalisations, compétences et expériences alignées avec les attendus de l&apos;épreuve E5.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
          >
            Voir les projets E5 <ArrowRight size={16} />
          </a>
          <a
            href="mailto:afrelaut.ledantec@gmail.com"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-100"
          >
            Contact direct
          </a>
        </div>

        <div className="mt-8 grid gap-4 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/80">
            <Mail size={18} className="text-primary" />
            afrelaut.ledantec@gmail.com
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 dark:border-slate-700 dark:bg-slate-900/80">
            <Phone size={18} className="text-primary" />
            06 98 32 65 37
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

