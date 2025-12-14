import { useState } from 'react'
import { Menu, X, Github, Linkedin } from 'lucide-react'

interface NavbarProps {
  links: Array<{ label: string; href: string }>
}

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/aurelien-bts', icon: Github },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/aurelien-bts', icon: Linkedin },
]

const Navbar = ({ links }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavigate = () => setIsOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/70 backdrop-blur border-b border-white/40">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="font-display text-lg font-semibold tracking-tight text-slate-900">
          Aurélien Frélaut
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-primary">
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </div>

          <a
            href="#contact"
            className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 text-slate-600 transition hover:border-primary hover:text-primary md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-100 bg-white px-4 pb-6 pt-2 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavigate}
                className="text-sm font-medium text-slate-700 transition hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600"
                  >
                    <Icon size={16} />
                    {social.label}
                  </a>
                )
              })}
            </div>
            <div className="flex items-center gap-3">

              <a
                href="#contact"
                onClick={handleNavigate}
                className="flex-1 rounded-full bg-primary px-4 py-2 text-center text-sm font-semibold text-white shadow-soft"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

