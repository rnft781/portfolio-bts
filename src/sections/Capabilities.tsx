const capabilities = [
  'Créer un site web responsive de A à Z',
  'Intégrer un design Figma en respectant la charte',
  'Travailler en Agile avec Trello et compte-rendus',
  'Versionner le code avec Git/GitHub',
  'Écrire des tests unitaires simples',
  'Relier un front React à un back local (API/PHP)',
  'Documenter et remettre un service au client/utilisateur',
  'Assurer un support de proximité (E5)',
]

const Capabilities = () => (
  <section id="capabilities" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Ce que je sais faire</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Compétences concrètes</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Liste validée avec mon référentiel BTS SIO pour prouver ma valeur opérationnelle.
        </p>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {capabilities.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200"
          >
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/15 text-xs font-semibold text-primary">✔</span>
            {item}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Capabilities

