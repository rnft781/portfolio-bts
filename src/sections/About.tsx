import { GraduationCap, MapPin } from 'lucide-react'

const About = () => (
  <section id="about" className="mb-20 scroll-mt-28">
    <div className="grid gap-8 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-2 lg:gap-12">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">À propos</p>
        <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">Parcours & ambition</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Étudiant en BTS SIO option SLAM au lycée Louis-Blériot, je construis des solutions web locales et sécurisées
          prêtes à être déployées dans un contexte professionnel. Mon objectif est d&apos;apporter un support fiable aux
          utilisateurs tout en amélioration continue des services.
        </p>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Passionné par le développement, j'ai acquis une solide expérience à travers mes stages et projets personnels.
          Je souhaite aujourd'hui mettre mes compétences techniques en PHP, SQL et JavaScript au service d'une entreprise innovante.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            <GraduationCap size={18} className="text-primary" />
            BTS Services Informatiques aux Organisations (SLAM) – 2023-2025
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Approche orientée développement applicatif, industrialisation des services numériques, documentation et
            préparation à l&apos;oral E5.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
            <MapPin size={18} className="text-primary" />
            Montigny-le-Bretonneux · Île-de-France
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
            Mobile en Île-de-France et disponible pour un contrat d&apos;alternance ou un stage de poursuite d&apos;études SLAM.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default About

