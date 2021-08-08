import { useEffect } from 'react'

export const useResizeEvent = (fn: () => void): void => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window) {
      window.addEventListener('resize', fn)
      fn()
      return () => window.removeEventListener('resize', fn)
    }
  })
}
