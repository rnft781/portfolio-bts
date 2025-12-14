import { Mail, MapPin, Phone } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const QuickContact = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="quick-contact" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact rapide</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Disponible dès maintenant</h2>
        <div className="mt-4 grid gap-4 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-3">
          <a href="mailto:afrelaut.ledantec@gmail.com" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 transition hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200">
            <Mail size={18} className="text-primary" />
            afrelaut.ledantec@gmail.com
          </a>
          <a href="tel:+33698326537" className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 transition hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200">
            <Phone size={18} className="text-primary" />
            06 98 32 65 37
          </a>
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
            <MapPin size={18} className="text-primary" />
            Montigny-le-Bretonneux
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuickContact

