import { useEffect } from 'react'

export const useScrollEvent = (fn: () => void): void => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      window.addEventListener('scroll', fn)
      fn()
      return () => window.removeEventListener('scroll', fn)
    }
  })
}
