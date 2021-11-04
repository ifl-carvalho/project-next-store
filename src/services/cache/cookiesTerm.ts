import { set, get } from 'js-cookie'

interface ICookiesTerm {
  saveAccepted: () => void
  getAccepted: () => void
}

class CookiesTerm implements ICookiesTerm {
  saveAccepted(): void {
    set('@CookieTerms:', 'accepted', { expires: 365 })
  }

  getAccepted(): string | undefined {
    return get('@CookieTerms:')
  }
}

export const CookiesTermManager = new CookiesTerm()
