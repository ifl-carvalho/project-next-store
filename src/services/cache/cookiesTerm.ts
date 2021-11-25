import cookies from 'js-cookie'

interface ICookiesTerm {
  saveAsAccepted: () => void
  getIfAccepted: () => string | undefined
}

class CookiesTerm implements ICookiesTerm {
  saveAsAccepted(): void {
    cookies.set('@CookieTerms:', 'accepted', { expires: 365 })
  }

  getIfAccepted(): string | undefined {
    return cookies.get('@CookieTerms:')
  }
}

export const CookiesTermManager = new CookiesTerm()
