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
    issuer: 'ANSSI / SecNumAcadémie',
    year: 2023,
    status: 'Validée',
    link: '/Attestation_Anssi.pdf',
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

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {certifications.map((certification) => (
            <article key={certification.name} className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">

              {/* Zone "Visuel" (Placeholder de diplôme) */}
              <div className="h-32 w-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
                {/* Icône symbolisant le document */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-slate-900">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" /></svg>
                </div>
              </div>

              {/* Contenu textuel */}
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {certification.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">
                      {certification.issuer}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${certification.status === 'Validée'
                        ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                      }`}
                  >
                    {certification.status}
                  </span>
                </div>

                <div className="mt-auto pt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-500">
                    Obtenu en {certification.year}
                  </span>

                  {'link' in certification ? (
                    <a
                      href={certification.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline hover:underline-offset-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                      Voir le justificatif
                    </a>
                  ) : (
                    <span className="text-xs font-medium text-slate-400 cursor-not-allowed">
                      Document non disponible
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications

