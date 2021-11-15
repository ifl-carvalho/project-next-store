import { set, get } from 'js-cookie'

interface ICookiesTerm {
  saveAsAccepted: () => void
  getIfAccepted: () => string | undefined
}

class CookiesTerm implements ICookiesTerm {
  saveAsAccepted(): void {
    set('@CookieTerms:', 'accepted', { expires: 365 })
  }

  getIfAccepted(): string | undefined {
    return get('@CookieTerms:')
  }
}

export const CookiesTermManager = new CookiesTerm()
