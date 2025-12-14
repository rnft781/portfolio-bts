import useScrollReveal from '../hooks/useScrollReveal'

const certifications = [
  {
    name: 'Attestation PIX – Compétences numériques',
    issuer: 'Éducation Nationale',
    year: 2024,
    status: 'Validée',
  },
  {
    name: 'Initiation Git & GitHub',
    issuer: 'OpenClassrooms',
    year: 2024,
    status: 'Validée',
  },
  {
    name: 'Sensibilisation cybersécurité',
    issuer: 'ANSSI / parcours lycée',
    year: 2023,
    status: 'Validée',
  },
  {
    name: 'Certification HTML/CSS avancée',
    issuer: 'OpenClassrooms',
    year: 2025,
    status: 'En cours',
  },
]

const Certifications = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="certifications" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Certifications & attestations</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Compétences validées</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Liste évolutive des validations officielles qui rassurent un tuteur, un professeur ou un employeur.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {certifications.map((certification) => (
            <article key={certification.name} className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{certification.name}</h3>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    certification.status === 'Validée' ? 'bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-200' : 'bg-amber-100 text-amber-600 dark:bg-amber-500/20 dark:text-amber-200'
                  }`}
                >
                  {certification.status}
                </span>
              </div>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {certification.issuer} · {certification.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

