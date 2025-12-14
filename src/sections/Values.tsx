import useScrollReveal from '../hooks/useScrollReveal'

const values = [
  { label: 'Rigoureux', description: 'Respect des consignes, vérification avant livraison.' },
  { label: 'Respect des deadlines', description: 'Planification réaliste + remontée précoce des risques.' },
  { label: 'Motivé', description: 'Veille et mini-projets perso pour progresser.' },
  { label: 'Ouvert à l\'apprentissage', description: 'Curiosité pour les nouveaux outils, remise en question.' },
  { label: 'Autonome', description: 'Capable de préparer une démo seul puis la présenter.' },
  { label: 'Communication claire', description: 'Compte-rendu clair, vulgarisation pour les non-tech.' },
  { label: 'Travail d\'équipe', description: 'Partage de code, relecture, entraide en cours.' },
]

const Values = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="values" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Valeurs & soft skills</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Savoir-être professionnel</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Qualités interpersonnelles et comportementales mises au service de l'équipe et des projets.
        </p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {values.map((value) => (
            <div key={value.label} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900/80">
              <div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">{value.label}</p>
                <p className="mt-1 text-xs text-slate-600 dark:text-slate-300">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Values

