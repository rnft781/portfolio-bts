import useScrollReveal from '../hooks/useScrollReveal'

const recentTechnologies = [
  { name: 'HTML / CSS', icon: '🎨', focus: 'Intégration Web', weeks: 'Continu' },
  { name: 'PHP', icon: '🐘', focus: 'Développement Back-end', weeks: '8 sem.' },
  { name: 'SQL / MySQL', icon: '🗄️', focus: 'Base de données', weeks: '5 sem.' },
  { name: 'JavaScript', icon: '📜', focus: 'Dynamisme Front', weeks: 'Continu' },
  { name: 'Git / GitHub', icon: '🔀', focus: 'Versioning & CI/CD', weeks: 'Continu' },
  { name: 'Bootstrap', icon: '🎯', focus: 'CSS Framework', weeks: '3 sem.' },
  { name: 'Symfony', icon: '🚀', focus: 'Framework PHP', weeks: 'En cours' },
  { name: 'WordPress', icon: '📝', focus: 'CMS', weeks: '2 sem.' },
]

const RecentTech = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="recent-tech" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Technos récentes</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Ce que j’ai utilisé cette année</h2>
          </div>
          <p className="max-w-lg text-sm text-slate-600 dark:text-slate-400">Style “activité GitHub” pour montrer que je pratique régulièrement.</p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recentTechnologies.map((tech) => (
            <div key={tech.name} className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
              <div className="mb-2 text-2xl" role="img" aria-label={tech.name}>
                {tech.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{tech.focus}</p>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{tech.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Pratique : {tech.weeks}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RecentTech

