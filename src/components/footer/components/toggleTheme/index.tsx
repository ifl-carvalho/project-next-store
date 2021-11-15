import Image from 'next/image'
import { useEffect, useState } from 'react'

import { CookiesThemeManager } from '../../../../services'

type Theme = 'light' | 'dark'

export function ToggleTheme(): JSX.Element {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const currentTheme = CookiesThemeManager.getCurrentTheme()
    if (currentTheme) {
      document.body.setAttribute('data-theme', currentTheme === 'light' ? 'light' : 'dark')
      setTheme(currentTheme)
    }
  }, [])

  function handleToggleTheme(): void {
    const theme = document.body.getAttribute('data-theme')
    const toggleTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(toggleTheme)
    CookiesThemeManager.saveCurrentTheme(toggleTheme)
    document.body.setAttribute('data-theme', toggleTheme)
  }

  return (
    <button onClick={handleToggleTheme}>
      <Image
        src={theme === 'light' ? '/icons/theme_sun.svg' : '/icons/theme_dark.svg'}
        width={30}
        height={30}
        alt={theme === 'light' ? 'Light Theme Logo' : 'Dark Theme Logo'}
        layout={'fixed'}
        objectFit={'cover'}
      />
    </button>
  )
}
