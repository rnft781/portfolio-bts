const skillGroups = [
  {
    title: 'Développement Back-end & BDD',
    items: ['PHP 8', 'MySQL / MariaDB', 'Symfony (Bases)', 'Modélisation MCD/MLD'],
  },
  {
    title: 'Développement Front-end',
    items: ['HTML5 / CSS3', 'JavaScript ES6+', 'Bootstrap', 'Responsive Design'],
  },
  {
    title: 'Outils & Environnement',
    items: ['Git / GitHub', 'VS Code', 'Wamp / XAMPP', 'Trello (Méthode Agile)'],
  },
]

const Skills = () => (
  <section id="skills" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Compétences</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Socle technique BTS SIO</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Compétences mobilisées dans les réalisations professionnelles et lors du stage chez Leano Design.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-200">
              {group.items.map((item) => (
                <li key={item} className="rounded-full border border-slate-200 px-3 py-1 dark:border-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Skills

