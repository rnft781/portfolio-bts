import { useEffect, useRef } from 'react'

const defaultOptions: IntersectionObserverInit = {
  threshold: 0.2,
  rootMargin: '0px 0px -50px 0px',
}

const useScrollReveal = <T extends HTMLElement>(options?: IntersectionObserverInit) => {
  const elementRef = useRef<T>(null)

  useEffect(() => {
    const node = elementRef.current
    if (!node || typeof window === 'undefined') return

    node.classList.add('reveal-hidden')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      options ?? defaultOptions,
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [options])

  return elementRef
}

export default useScrollReveal

