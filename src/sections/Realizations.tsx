const realizations = [
  {
    title: 'Site vitrine Leano Design',
    mission: 'Stage 2025 – refonte intégrale du site client',
    slam: ['SLAM1', 'SLAM2', 'SLAM4', 'SLAM5'],
    description:
      'Création d’un site vitrine responsive avec animation légère, optimisation du parcours et documentation remise au client.',
    tech: ['Vite', 'TailwindCSS', 'JavaScript', 'GitHub'],
    contribution: 'Intégration complète, accessibilité, optimisation des performances et rédaction du guide utilisateur.',
    difficulties: 'Gestion des assets fournis en plusieurs formats, synchronisation avec les retours graphiques en temps réduit.',
    result: 'Site livré, validé par l’agence, prêt à être hébergé et présenté lors de l’oral E5.',
  },
  {
    title: 'Application To-Do JavaScript',
    mission: 'Projet personnel – suivi de tâches et démonstration front',
    slam: ['SLAM2', 'SLAM3', 'SLAM4'],
    description:
      'Application monopage permettant de créer, filtrer, compléter et archiver des tâches avec sauvegarde locale.',
    tech: ['JavaScript', 'LocalStorage', 'Jest (tests unitaires)', 'Vite'],
    contribution: 'Conception UI, gestion d’état locale, écriture d’une série de tests unitaires et documentation utilisateur.',
    difficulties: 'Mise en place d’un système de filtres dynamique tout en conservant les performances sur mobile.',
    result: 'Démonstrateur prêt pour l’oral E5, code hébergeable sur GitHub Pages.',
  },
  {
    title: 'Mini plateforme PHP',
    mission: 'Travail SLAM – gestion de contenus et exports PDF',
    slam: ['SLAM1', 'SLAM3', 'SLAM4', 'SLAM5'],
    description:
      'Plateforme interne permettant d’administrer des contenus, gérer les rôles et générer des exports PDF.',
    tech: ['PHP 8', 'MySQL', 'Bootstrap', 'TCPDF'],
    contribution: 'Développement du back-office, sécurisation des accès et création d’un module d’impression PDF.',
    difficulties: 'Gestion des rôles utilisateurs et sécurisation des formulaires contre les injections.',
    result: 'Solution installable localement, documentation incluse et démonstration possible hors connexion.',
  },
]

const Realizations = () => (
  <section id="realizations" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Réalisations professionnelles – E5</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Dossiers prêts pour l’oral</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Chaque fiche rappelle les compétences SLAM mobilisées, les difficultés rencontrées et le résultat attendu par le jury.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {realizations.map((realization) => (
          <article key={realization.title} className="rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/80">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="font-display text-2xl font-semibold text-slate-900 dark:text-white">{realization.title}</h3>
              <span className="rounded-full bg-secondary/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-secondary dark:bg-secondary/20">
                {realization.mission}
              </span>
            </div>

            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-100">Description :</span> {realization.description}
                </p>
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-100">Contribution :</span> {realization.contribution}
                </p>
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-100">Difficultés :</span> {realization.difficulties}
                </p>
                <p>
                  <span className="font-semibold text-slate-700 dark:text-slate-100">Résultat :</span> {realization.result}
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">Compétences SLAM mobilisées</p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                    {realization.slam.map((item) => (
                      <li key={item} className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary dark:bg-primary/20">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">Technologies & outils</p>
                  <ul className="mt-3 flex flex-wrap gap-2 text-xs">
                    {realization.tech.map((item) => (
                      <li key={item} className="rounded-full border border-slate-200 px-3 py-1 text-slate-600 dark:border-slate-700 dark:text-slate-200">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Realizations

