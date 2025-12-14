const Footer = () => (
  <footer className="border-t border-slate-200 bg-white/80 py-8 text-sm text-slate-500 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-400">
    <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
      <div>
        <p>© {new Date().getFullYear()} Aurélien Frélaut · Portfolio BTS SIO SLAM</p>
        <p className="text-xs">Projet local validable pour l’épreuve E5. Libre d’être déployé sur GitHub Pages, Hostinger, lycée.</p>
      </div>
      <div className="flex items-center gap-4 text-xs">
        <a href="https://github.com/aurelien-bts" target="_blank" rel="noreferrer" className="hover:text-primary">
          GitHub
        </a>
        <a href="https://linkedin.com/in/aurelien-bts" target="_blank" rel="noreferrer" className="hover:text-primary">
          LinkedIn
        </a>
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="rounded-full border border-slate-200 px-3 py-1 hover:border-primary hover:text-primary dark:border-slate-700">
          Haut de page
        </button>
      </div>
    </div>
  </footer>
)

export default Footer

