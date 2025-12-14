const objectives = [
  'Valider l’épreuve E5 avec des dossiers solides et documentés',
  'Trouver un stage ou une alternance orientée front / support',
  'Monter en compétence sur React, Tailwind et Next.js',
  'Continuer à livrer des services fiables et documentés',
  'Construire un réseau pro (LinkedIn, GitHub, événements)',
]

const Objectives = () => (
  <section id="objectives" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Objectifs professionnels</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Vision à court terme</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {objectives.map((objective) => (
          <div key={objective} className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-200">
            {objective}
          </div>
        ))}
      </div>
    </div>
  </section>
)

export default Objectives

