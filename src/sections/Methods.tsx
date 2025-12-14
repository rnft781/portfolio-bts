import useScrollReveal from '../hooks/useScrollReveal'

const methods = [
  { title: 'Organisation Agile / Scrum', description: 'Daily rapide, sprint board Trello, rétrospective courte.' },
  { title: 'Gestion des tâches Trello', description: 'Colonnes idées → en cours → prêt → livré, checklist pour chaque carte.' },
  { title: 'Versioning Git', description: 'Branches par fonctionnalité, PR simulées, messages de commit clairs.' },
  { title: 'Normes HTML/CSS', description: 'Structure sémantique, accessibilité de base, classes utilitaires Tailwind.' },
  { title: 'Tests unitaires légers', description: 'Cas critiques sur projets JS/PHP, rapport rapide des résultats.' },
  { title: 'Documentation', description: 'README, captures, instructions de déploiement local.' },
]

const Methods = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="methods" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Méthodes de travail</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Comment j’organise mes projets</h2>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {methods.map((method) => (
            <article key={method.title} className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{method.title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{method.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Methods

