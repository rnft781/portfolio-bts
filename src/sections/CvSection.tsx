import { downloadSimplePdf } from '../utils/pdf'

const CvSection = () => {
  const handleDownloadCv = () =>
    downloadSimplePdf('cv-aurelien-frelau.pdf', 'CV – Aurélien Frélaut', [
      'BTS SIO – SLAM (2023-2025)',
      'Stage 2025 – Leano Design',
      'Compétences clés : React, PHP, Tailwind, GitHub, Support utilisateur',
      'Objectif : Alternance / mission freelance en dev web',
      'Remplacer ce PDF généré automatiquement par ton CV officiel si besoin.',
    ])

  return (
    <section id="cv" className="mb-20 scroll-mt-28">
      <div className="grid gap-8 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">CV express</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Résumé professionnel</h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            BTS SIO (SLAM), passionné d’intégration web, autonome sur les projets front, capable de travailler en équipe et de restituer
            un service à un client. Disponible pour alternance ou mission freelance.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>🎓 Formation : BTS SIO – SLAM, lycée Louis-Blériot</li>
            <li>🏢 Stage : Leano Design (mai–juin 2025)</li>
            <li>💼 Forces : UI/UX, intégration, support utilisateur, documentation</li>
            <li>🛠️ Logiciels : VS Code, GitHub, Trello, Figma</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-300">Actions rapides</p>
          <button
            onClick={handleDownloadCv}
            className="mt-4 w-full rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
          >
            Télécharger mon CV (PDF)
          </button>
          <a
            href="mailto:afrelaut.ledantec@gmail.com"
            className="mt-3 block w-full rounded-full border border-slate-200 px-5 py-3 text-center text-sm font-semibold text-slate-700 transition hover:border-primary hover:text-primary dark:border-slate-700 dark:text-slate-100"
          >
            Me contacter par email
          </a>
          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
            ➜ Le PDF généré est local. Remplace-le par ton CV officiel dans le dossier `docs/` ou laisse ce modèle pour montrer ta
            maîtrise technique.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CvSection

