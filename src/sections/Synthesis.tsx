import { downloadSimplePdf } from '../utils/pdf'

const synthesisRows = [
  {
    title: 'Site vitrine Leano Design',
    environment: 'Vite · React · TailwindCSS',
    competences: 'SLAM1 · SLAM4 · SLAM5',
    role: 'Intégration complète + support',
  },
  {
    title: 'Application To-Do JavaScript',
    environment: 'Vanilla JS · LocalStorage',
    competences: 'SLAM2 · SLAM3 · SLAM4',
    role: 'Front complet + tests unitaires',
  },
  {
    title: 'Mini plateforme PHP',
    environment: 'PHP 8 · MySQL · Bootstrap',
    competences: 'SLAM1 · SLAM3 · SLAM5',
    role: 'Back-office + export PDF',
  },
]

const Synthesis = () => {
  const handleDownload = () =>
    downloadSimplePdf('tableau-synthese-e5.pdf', 'Tableau de synthèse E5 – Aurélien Frélaut', [
      'Ce document récapitule les réalisations présentées à l’épreuve E5.',
      'SLAM1 – Gestion du patrimoine informatique',
      'SLAM2 – Support et réponse aux incidents',
      'SLAM3 – Développement d’applications',
      'SLAM4 – Mise à disposition de services',
      'SLAM5 – Développement d’une présence en ligne',
      'Remplacer ce PDF généré automatiquement par le tableau officiel si besoin.',
    ])

  return (
    <section id="synthesis" className="mb-20 scroll-mt-28">
      <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Tableau de synthèse</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Vue rapide des dossiers E5</h2>
          </div>
          <button
            onClick={handleDownload}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
          >
            Télécharger en PDF
          </button>
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-100/70 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-800/60 dark:text-slate-300">
              <tr>
                <th className="px-4 py-3">Réalisation</th>
                <th className="px-4 py-3">Environnement</th>
                <th className="px-4 py-3">Compétences SLAM</th>
                <th className="px-4 py-3">Rôle d’Aurélien</th>
              </tr>
            </thead>
            <tbody>
              {synthesisRows.map((row) => (
                <tr key={row.title} className="border-t border-slate-100 text-slate-700 dark:border-slate-800 dark:text-slate-200">
                  <td className="px-4 py-4 font-semibold text-slate-900 dark:text-white">{row.title}</td>
                  <td className="px-4 py-4">{row.environment}</td>
                  <td className="px-4 py-4">{row.competences}</td>
                  <td className="px-4 py-4">{row.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
          ➜ Télécharge le PDF pour le déposer dans ton dossier E5 ou remplace le contenu par ton tableau officiel.
        </p>
      </div>
    </section>
  )
}

export default Synthesis

