import useScrollReveal from '../hooks/useScrollReveal'

const improvements = [
  {
    title: 'Site vitrine – avant/après',
    before: 'Maquette statique, pas responsive, boutons peu visibles.',
    after: 'Grille responsive Tailwind, CTA mis en avant, palette cohérente.',
    impact: '+35% de lisibilité mobile',
  },
  {
    title: 'Formulaire – avant/après',
    before: 'Aucun feedback, champs collés, peu accessible.',
    after: 'Messages d’erreur clairs, spacing confortable, focus visible.',
    impact: 'Formulaire prêt pour production locale',
  },
  {
    title: 'Code – avant/après',
    before: 'Fichiers longs, commentaires absents, pas de README.',
    after: 'Composants découpés, README + scripts npm, tests de base.',
    impact: 'Livrable professionnel pour E5',
  },
]

const BeforeAfter = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="before-after" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Avant / après</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Améliorations concrètes</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Très bon pour montrer ta progression. Exemples d'améliorations réalisées sur mes projets.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {improvements.map((item) => (
            <article key={item.title} className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
              <div className="mt-3 rounded-2xl border border-rose-100 bg-rose-50 p-3 text-rose-700 dark:border-rose-500/40 dark:bg-rose-500/15 dark:text-rose-100">
                <p className="text-xs font-semibold uppercase tracking-wide">Avant</p>
                <p>{item.before}</p>
              </div>
              <div className="mt-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-3 text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/15 dark:text-emerald-100">
                <p className="text-xs font-semibold uppercase tracking-wide">Après</p>
                <p>{item.after}</p>
              </div>
              <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-primary">{item.impact}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BeforeAfter

