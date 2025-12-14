import { Mail } from 'lucide-react'

const Hero = () => {

  return (
    <section id="hero" className="mb-16 scroll-mt-28">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Carte principale (Intro) */}
        <div className="flex flex-col justify-center rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-slate-900 lg:col-span-2">
          <h1 className="font-display text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Aurélien Frélaut
          </h1>
          <p className="mt-2 text-xl font-medium text-slate-500 dark:text-slate-400">
            Développeur Web & SLAM
          </p>
          <p className="mt-6 max-w-lg text-slate-600 dark:text-slate-300">
            J'aide les entreprises à concevoir des outils numériques performants.
            En route vers le diplôme BTS SIO 2025.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200 dark:bg-slate-800 dark:text-white dark:hover:bg-slate-700"
            >
              Me contacter
            </a>
          </div>
        </div>

        {/* Carte Contact Rapide (Right Stack) */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-1 flex-col justify-center rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-slate-900">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Mail size={20} />
            </div>
            <p className="text-xs font-semibold uppercase text-slate-500">Email</p>
            <a href="mailto:afrelaut.ledantec@gmail.com" className="mt-1 font-medium text-slate-900 hover:underline dark:text-white">
              afrelaut.ledantec@gmail.com
            </a>
          </div>
        </div>

        {/* Carte Localisation (Full Width Bottom) */}
        <div className="flex flex-col justify-center rounded-3xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:bg-slate-900 lg:col-span-3">
          <h3 className="font-semibold text-slate-900 dark:text-white">Basé en Île-de-France</h3>
          <p className="mt-1 text-sm text-slate-500">Montigny-le-Bretonneux (78) · Mobile à Paris & alentours</p>
        </div>
      </div>
    </section>
  )
}

export default Hero

