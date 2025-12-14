import { downloadSimplePdf } from '../utils/pdf'
import useScrollReveal from '../hooks/useScrollReveal'

const Downloads = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  const handleDownload = (type: 'cv' | 'synthese' | 'rapport') => {
    if (type === 'cv') {
      downloadSimplePdf('cv-aurelien-frelau.pdf', 'CV – Aurélien Frélaut', [
        'BTS SIO SLAM – Promo 2025',
        'Compétences : React, PHP, Tailwind, Git, Support',
        'Stage : Leano Design (mai-juin 2025)',
      ])
    }
    if (type === 'synthese') {
      downloadSimplePdf('tableau-synthese-e5.pdf', 'Tableau de synthèse – Aurélien Frélaut', [
        'R1 – Site vitrine Leano · SLAM1/4/5',
        'R2 – Application To-Do JS · SLAM2/3/4',
        'R3 – Mini plateforme PHP · SLAM1/3/5',
      ])
    }
    if (type === 'rapport') {
      downloadSimplePdf('rapport-stage-leano.pdf', 'Rapport de stage – Aurélien Frélaut', [
        'Contexte : Leano Design, mai-juin 2025',
        'Mission : intégration vitrine + support responsive',
        'Conclusion : objectifs atteints, recommandation positive',
      ])
    }
  }

  return (
    <section id="downloads" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Téléchargements</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Documents prêts pour E5</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Ultra utile pour l'E5. Documents prêts à télécharger.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { label: '📄 Télécharger mon CV (PDF)', type: 'cv' as const },
            { label: '📄 Télécharger mon tableau de synthèse (PDF)', type: 'synthese' as const },
            { label: '📄 Télécharger mon rapport de stage (PDF)', type: 'rapport' as const },
          ].map((download) => (
            <button
              key={download.type}
              onClick={() => handleDownload(download.type)}
              className="rounded-2xl border border-slate-200 bg-white/90 px-5 py-4 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-100"
            >
              {download.label}
            </button>
          ))}
        </div>
        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">➡️ Remplace ensuite ces PDF simulés par tes fichiers officiels.</p>
      </div>
    </section>
  )
}

export default Downloads

