type Project = {
  title: string
  description: string
  context: string
  skills: string[]
  tags: string[]
}

const projects: Project[] = [
  {
    title: 'Site vitrine Leano',
    description:
      'Développement de la nouvelle vitrine de l’agence avec un design responsive et des animations légères optimisées pour la conversion.',
    context: 'Stage BTS SIO 2025 – Leano Design',
    skills: ['TailwindCSS', 'JavaScript', 'Accessibilité', 'Optimisation mobile'],
    tags: ['E5', 'Intégration', 'Support'],
  },
  {
    title: 'Application To-Do JavaScript',
    description:
      'Application mono-page permettant de suivre les tâches, filtrer par statut et sauvegarder localement grâce au LocalStorage.',
    context: 'Projet d’apprentissage front-end',
    skills: ['JavaScript', 'Gestion d’état', 'Tests unitaires'],
    tags: ['Autonomie', 'Front', 'LocalStorage'],
  },
  {
    title: 'Mini plateforme PHP',
    description:
      'Back-office léger pour gérer des contenus (CRUD, authentification simple) et générer des rapports PDF exportables.',
    context: 'Travail SLAM',
    skills: ['PHP', 'MySQL', 'POO', 'Sécurité'],
    tags: ['Back-end', 'Documentation', 'E5'],
  },
]

const Projects = () => (
  <section id="projects" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Réalisations professionnelles</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Sélection E5</h2>
        </div>
        <p className="max-w-xl text-sm text-slate-600 dark:text-slate-400">
          Chaque projet est documenté pour l’oral : objectifs, rôle, compétences mobilisées, livrables et axes d’amélioration.
        </p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white/90 dark:border-slate-800 dark:bg-slate-900/80">
            <div className="relative w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-primary/20 via-slate-100 to-secondary/20 p-6 text-slate-600 dark:from-primary/30 dark:via-slate-900 dark:to-secondary/30">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">Mockup</p>
              <p className="mt-3 text-lg font-semibold text-slate-800 dark:text-white">{project.context}</p>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-primary">
                {project.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-primary/10 px-3 py-1 font-semibold dark:bg-primary/20">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="mt-6 space-y-1 text-sm text-slate-600 dark:text-slate-300">
                <p className="font-semibold text-slate-700 dark:text-slate-100">Compétences mobilisées</p>
                <ul className="list-disc space-y-1 pl-4">
                  {project.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                aria-disabled="true"
                className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-200"
              >
                Voir le code (placeholder)
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default Projects

