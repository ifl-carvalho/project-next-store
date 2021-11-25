import cookies from 'js-cookie'

interface ICookiesTheme {
  saveCurrentTheme: (theme: string) => void
  getCurrentTheme: () => 'light' | 'dark' | undefined
}

class CookiesTheme implements ICookiesTheme {
  saveCurrentTheme(theme: string): void {
    cookies.set('@CookieTheme:', theme, { expires: 365 })
  }

  getCurrentTheme(): 'light' | 'dark' | undefined {
    return cookies.get('@CookieTheme:') as 'light' | 'dark' | undefined
  }
}

export const CookiesThemeManager = new CookiesTheme()
