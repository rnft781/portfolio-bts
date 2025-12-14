import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5"
      aria-label="Remonter en haut de la page"
    >
      <ArrowUp size={16} />
      Haut
    </button>
  )
}

export default BackToTopButton

