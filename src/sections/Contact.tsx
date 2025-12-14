import { useState } from 'react'
import type { FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'

const Contact = () => {
  // Gestion de l'état du formulaire (machine à états simple)
  // 'idle' = en attente, 'sending' = envoi en cours, 'sent' = envoyé succès
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // Empêche le rechargement de la page (comportement par défaut des formulaires HTML)
    event.preventDefault()
    if (status === 'sending') return

    const form = event.currentTarget
    setStatus('sending')

    // Simulation d'un appel API asynchrone (ex: fetch('/api/contact'))
    // Ici on utilise setTimeout pour simuler la latence réseau
    setTimeout(() => {
      setStatus('sent')
      form.reset()
    }, 1200)
  }

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="grid gap-8 rounded-3xl border border-white/60 bg-white/80 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900/70 lg:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Contact</p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-slate-900 dark:text-white">
            Prendre contact (simulation locale)
          </h2>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Le formulaire ci-contre simule l&apos;envoi d&apos;un message via un simple setTimeout afin de rester 100% local.
            Pour un vrai échange, utilisez l&apos;email ou le téléphone ci-dessous.
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
              Réponse sous 24h en période scolaire
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
              disabled={status === 'sending'}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'sending' ? 'Envoi en cours...' : status === 'sent' ? 'Message envoyé (simulation)' : 'Envoyer le message'}
            </button>
          </div>
          {status === 'sent' && (
            <p className="mt-3 text-xs font-medium text-emerald-500">Message envoyé (simulation). Merci pour votre intérêt !</p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact

