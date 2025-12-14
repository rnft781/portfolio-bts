const Experience = () => (
  <section id="experience" className="mb-20 scroll-mt-28">
    <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Expérience</p>
      <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Stage 2025 – Leano Design</h2>

      <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/80">
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">Mai · Juin 2025</p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-white">Intégration web & design responsive</h3>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>Intégration complète de maquettes vitrines pour les clients de l&apos;agence.</li>
            <li>Optimisation responsive (mobile-first) et cohérence graphique multi-supports.</li>
            <li>Mise en place d&apos;interactions JavaScript légères pour dynamiser les landing pages.</li>
            <li>Participation à la cohérence des livrables et au suivi Trello avec l&apos;équipe.</li>
          </ul>
        </div>

        <div className="space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">Compétences mobilisées</p>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              Intégration HTML/CSS avancée, TailwindCSS, animations JavaScript, travail en équipe et communication client.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">Livrables fournis</p>
            <p className="mt-2">
              Sites vitrines prêts pour la mise en production, documentation de maintenance, suivi des tickets et correctifs.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-300">Rôle pour l&apos;oral E5</p>
            <p className="mt-2">
              Cette expérience illustre la capacité à intégrer, tester et présenter un service numérique complet depuis la
              réception du besoin jusqu&apos;au support utilisateur.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Experience

