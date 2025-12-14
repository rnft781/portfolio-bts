const services = [
  {
    title: 'Création de site vitrine',
    description: 'Maquettes modernes, responsive, hébergeables sur GitHub Pages ou Hostinger.',
    deliverables: ['Design fidèle', 'Optimisation SEO de base', 'Documentation de prise en main'],
  },
  {
    title: 'Intégration web responsive',
    description: 'Intégration Tailwind/Bootstrap à partir de maquettes Figma, accessibilité incluse.',
    deliverables: ['Code propre', 'Compatibilité multi-navigateurs', 'Animations légères'],
  },
  {
    title: 'Refonte UI/UX express',
    description: 'Audit rapide, recommandations d’ergonomie et mise à jour graphique cohérente.',
    deliverables: ['Moodboard', 'Guide de styles', 'Support à la restitution'],
  },
  {
    title: 'Automatisation simple',
    description: 'Scripts locaux pour gagner du temps (export CSV, génération de rapports).',
    deliverables: ['Script documenté', 'Procédure d’installation', 'Support lors de la prise en main'],
  },
  {
    title: 'Accompagnement technique',
    description: 'Aide à la mise en production, support utilisateurs, triage des incidents.',
    deliverables: ['Plan d’action', 'Suivi Trello', 'Reporting clair'],
  },
]

const Services = () => (
  <section id="services" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Services proposés</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">
            Missions freelance & support SLAM
          </h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Offre claire pour rassurer un jury ou un futur tuteur sur ma capacité à intervenir en autonomie.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/80">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{service.title}</h3>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{service.description}</p>
            <ul className="mt-4 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {service.deliverables.map((deliverable) => (
                <li key={deliverable} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary/70" aria-hidden />
                  {deliverable}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Services

