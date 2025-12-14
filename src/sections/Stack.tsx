const stackItems = [
  { label: 'HTML', color: 'bg-orange-100 text-orange-600', description: 'Structure sémantique' },
  { label: 'CSS', color: 'bg-sky-100 text-sky-600', description: 'Design responsive' },
  { label: 'JS', color: 'bg-yellow-100 text-yellow-600', description: 'Interactions et logique' },
  { label: 'TS', color: 'bg-blue-100 text-blue-600', description: 'Typage et robustesse' },
  { label: 'React', color: 'bg-cyan-100 text-cyan-600', description: 'SPAs modernes' },
  { label: 'PHP', color: 'bg-emerald-100 text-emerald-600', description: 'Back-office SLAM' },
  { label: 'C#', color: 'bg-purple-100 text-purple-600', description: 'Logiciels lourds' },
  { label: 'Git', color: 'bg-rose-100 text-rose-600', description: 'Versioning collaboratif' },
  { label: 'Tailwind', color: 'bg-indigo-100 text-indigo-600', description: 'Design system rapide' },
  { label: 'Bootstrap', color: 'bg-fuchsia-100 text-fuchsia-600', description: 'UI rapide' },
  { label: 'Vite', color: 'bg-teal-100 text-teal-600', description: 'Dev local instantané' },
  { label: 'Trello', color: 'bg-lime-100 text-lime-600', description: 'Suivi Agile' },
]

const Stack = () => (
  <section id="stack" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Stack technique</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Outils & langages maîtrisés</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">Logos stylisés, 100 % local, présentable au jury.</p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {stackItems.map((item) => (
          <div key={item.label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
            <div className={`flex h-12 w-12 items-center justify-center rounded-2xl text-sm font-semibold ${item.color}`}>{item.label}</div>
            <div>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{item.label}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Stack

