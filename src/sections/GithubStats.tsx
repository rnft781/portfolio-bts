import useScrollReveal from '../hooks/useScrollReveal'

const GithubStats = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()
  const username = 'aurelien-bts'

  return (
    <section id="github" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Statistiques GitHub</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Activité publique</h2>
          </div>
          <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
            Images dynamiques (GitHub Readme Stats). Remplace le pseudo si besoin pour afficher tes vraies métriques.
          </p>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <img
            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true`}
            alt="Statistiques GitHub d'Aurélien"
            loading="lazy"
            className="rounded-2xl border border-slate-200 dark:border-slate-800"
          />
          <img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true`}
            alt="Langages principaux GitHub d'Aurélien"
            loading="lazy"
            className="rounded-2xl border border-slate-200 dark:border-slate-800"
          />
          <img
            src={`https://github-readme-streak-stats.demolab.com/?user=${username}&theme=transparent&hide_border=true`}
            alt="Streak GitHub d'Aurélien"
            loading="lazy"
            className="rounded-2xl border border-slate-200 dark:border-slate-800"
          />
        </div>
        <div className="mt-6">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=transparent`}
            alt="Profile summary GitHub d'Aurélien"
            loading="lazy"
            className="w-full rounded-2xl border border-slate-200 dark:border-slate-800"
          />
        </div>
      </div>
    </section>
  )
}

export default GithubStats

