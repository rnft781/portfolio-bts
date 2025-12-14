import useScrollReveal from '../hooks/useScrollReveal'

const notes = [
  {
    title: 'Comment j’ai structuré mon dépôt Git',
    date: 'Mars 2025',
    summary: 'Convention de commits, branches par feature, README détaillé et issues Trello reliées.',
    tags: ['Git', 'Organisation'],
  },
  {
    title: 'Créer un formulaire responsive accessible',
    date: 'Février 2025',
    summary: 'Labels, placeholders clairs, focus states, validations locales et feedback visuel.',
    tags: ['UI', 'Accessibilité'],
  },
  {
    title: 'Mes astuces Tailwind pour accélérer',
    date: 'Janvier 2025',
    summary: 'Classes utilitaires enregistrées, palettes personnalisées et composants réutilisables.',
    tags: ['Tailwind', 'Productivité'],
  },
]

const Notes = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="notes" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">Mini blog / notes techniques</p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Retours d’expérience rapides</h2>
          </div>
          <p className="max-w-lg text-sm text-slate-600 dark:text-slate-400">Format court pour montrer ma capacité à documenter. Ça impressionne fortement les recruteurs.</p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {notes.map((note) => (
            <article key={note.title} className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/80 dark:text-slate-300">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">{note.date}</p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-white">{note.title}</h3>
              <p className="mt-2">{note.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-primary">
                {note.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-primary/10 px-3 py-1 font-semibold dark:bg-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Notes

