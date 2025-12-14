const timeline = [
  {
    year: '2023',
    title: 'Entrée en BTS SIO (SLAM)',
    details: 'Découverte des bonnes pratiques de développement et des exigences du référentiel E5.',
  },
  {
    year: '2024',
    title: 'Projets SLAM & premières réalisations',
    details: 'Mini plateforme PHP, application To-Do JavaScript, maîtrise de GitHub et Trello.',
  },
  {
    year: '2025',
    title: 'Stage Leano Design (mai – juin)',
    details: 'Réalisations vitrines, intégration responsive et support utilisateur.',
  },
  {
    year: '2026',
    title: 'Objectif : Alternance / poursuite d’étude',
    details: 'Cherche un environnement pour consolider mes compétences front & support.',
  },
]

const Timeline = () => (
  <section id="timeline" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Parcours</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Timeline BTS & expériences</h2>
      <div className="mt-8 space-y-6 border-l-2 border-primary/30 pl-6">
        {timeline.map((entry) => (
          <div key={entry.year} className="relative">
            <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-white bg-primary dark:border-slate-900" aria-hidden />
            <p className="text-xs font-semibold uppercase tracking-wide text-primary">{entry.year}</p>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{entry.title}</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{entry.details}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Timeline

