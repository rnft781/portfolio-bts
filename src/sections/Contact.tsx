import type { FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Récupération des données du formulaire
    const formData = new FormData(event.currentTarget)
    const name = formData.get('fullname')?.toString() || ''
    const email = formData.get('email')?.toString() || ''
    const message = formData.get('message')?.toString() || ''

    // Construction du lien mailto
    const subject = encodeURIComponent(`Contact Portfolio de ${name}`)
    const body = encodeURIComponent(`Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)

    // Ouverture du client mail par défaut
    window.location.href = `mailto:afrelaut.ledantec@gmail.com?subject=${subject}&body=${body}`

    // Reset du formulaire (optionnel)
    event.currentTarget.reset()
  }

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="grid gap-8 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">
            Prendre contact
          </h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Une opportunité d'alternance ou une question sur mon parcours ?
            N'hésitez pas à m'envoyer un message via le formulaire ou directement par email.
          </p>

          <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
              <Mail size={18} className="text-primary" />
              afrelaut.ledantec@gmail.com
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
              <Phone size={18} className="text-primary" />
              06 98 32 65 37
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
              <MapPin size={18} className="text-primary" />
              Montigny-le-Bretonneux · Île-de-France
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 dark:border-slate-800 dark:bg-slate-900/80">
              <Clock size={18} className="text-primary" />
              Réponse sous 24h
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white/90 p-6 dark:border-slate-800 dark:bg-slate-900/80">
          <div className="grid gap-4">
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Nom complet
              <input
                type="text"
                name="fullname"
                required
                placeholder="Votre nom"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-slate-700 dark:bg-slate-900"
              />
            </label>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Email
              <input
                type="email"
                name="email"
                required
                placeholder="vous@email.com"
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-slate-700 dark:bg-slate-900"
              />
            </label>
            <label className="text-sm font-medium text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Décrivez votre besoin pour un projet ou une collaboration."
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-primary focus:outline-none dark:border-slate-700 dark:bg-slate-900"
              />
            </label>
            <button
              type="submit"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
            >
              Envoyer le message (via Email)
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact

