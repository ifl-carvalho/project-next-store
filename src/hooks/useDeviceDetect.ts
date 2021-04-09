import { useState, useEffect } from 'react'

interface useDeviceReturn {
  isMobile: boolean
}

export function useDeviceDetect(): useDeviceReturn {
  const [isMobile, setMobile] = useState(false)

  useEffect(() => {
    const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent
    const mobile = Boolean(
      userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
    )
    setMobile(mobile)
  }, [])

  return { isMobile }
}
