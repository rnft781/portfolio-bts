import useScrollReveal from '../hooks/useScrollReveal'

const testimonials = [
  {
    quote: 'Aurélien est sérieux, autonome et impliqué dans son travail, notamment dans l\'intégration web durant son stage.',
    author: 'Responsable – Leano Design',
  },
  {
    quote: 'Étudiant sérieux, force de proposition lors des travaux pratiques. Il documente proprement ses projets.',
    author: 'Professeur référent SLAM',
  },
  {
    quote: 'Communication claire, suivi Trello impeccable et code facile à reprendre. Collaboration fluide.',
    author: 'Chef de projet (projet école)',
  },
]

const Testimonials = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="testimonials" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Avis & recommandations</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Retours de stage et encadrement</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote key={testimonial.author} className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <p className="italic">&ldquo;{testimonial.quote}&rdquo;</p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{testimonial.author}</p>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

