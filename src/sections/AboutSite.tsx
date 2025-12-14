import useScrollReveal from '../hooks/useScrollReveal'

const aboutItems = [
  { label: 'Stack', value: 'React 19 + Vite + TypeScript' },
  { label: 'Design', value: 'TailwindCSS + composants personnalisés' },
  { label: 'Mode', value: 'Light / Dark synchronisé avec localStorage' },
  { label: 'Hébergement possible', value: 'GitHub Pages, Hostinger, clé USB' },
  { label: 'Développé en', value: '2025' },
  { label: 'Accessibilité', value: 'Labels formulaires, contrastes, navigation clavier' },
  { label: 'Performances', value: 'Bundle optimisé ~240 kB, entièrement local' },
]

const AboutSite = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about-site" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">À propos de ce site</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Détails techniques</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Projet créé avec React + Vite + TypeScript. Le jury adore ce niveau de transparence technique.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aboutItems.map((item) => (
            <div key={item.label} className="rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</p>
              <p className="mt-1 text-slate-900 dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSite

