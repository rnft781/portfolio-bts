import { Figma, Github, Laptop, PenSquare, Trello, Code } from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'

const tools = [
  { name: 'VS Code', description: 'IDE principal pour React, PHP, Tailwind.', icon: Laptop },
  { name: 'Figma', description: 'Récupération et adaptation des maquettes.', icon: Figma },
  { name: 'GitHub', description: 'Versioning, issues, déploiement statique.', icon: Github },
  { name: 'Trello', description: 'Pilotage des tâches et suivi Agile.', icon: Trello },
  { name: 'Chrome DevTools', description: 'Debug responsive, audits lighthouse.', icon: Code },
  { name: 'Notion / Docs', description: 'Prise de notes et scripts de restitution.', icon: PenSquare },
]

const ToolsFav = () => {
  const revealRef = useScrollReveal<HTMLDivElement>()

  return (
    <section id="tools" className="mb-20 scroll-mt-28">
      <div ref={revealRef} className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">Outils préférés</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Mon setup quotidien</h2>
        <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
          Simple mais pro. Outils que j'utilise quotidiennement pour mes projets.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <article key={tool.name} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
                <div className="rounded-2xl border border-slate-200 p-3 text-primary dark:border-slate-700">
                  <Icon size={20} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{tool.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{tool.description}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ToolsFav

