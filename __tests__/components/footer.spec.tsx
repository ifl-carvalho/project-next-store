import { clearAllCookies, render, fireEvent, screen } from 'test-utils'

import Image from 'next/image'

import { ToggleTheme } from '../../src/components/footer/components/toggleTheme'
import { Input } from '../../src/components/footer/components/input'
import { Footer } from '../../src/components/footer'

import { CookiesThemeManager } from '../../src/services'

describe('Footer', () => {
  describe('It should', () => {
    it('renders correctly', () => {
      const { container } = render(<Footer />)
      expect(container.firstChild).toBeInTheDocument()
    })
    it('renders correctly ToggleTheme', () => {
      const { container } = render(<ToggleTheme />)
      expect(container.firstChild).toBeInTheDocument()
    })
    it('renders correctly Input', () => {
      const { container } = render(<Input />)
      expect(container.firstChild).toBeInTheDocument()
    })
  })

  describe('Toggle Theme', () => {
    it('should change image & theme to dark if current one is light', () => {
      render(<ToggleTheme />)
      const button = screen.getByRole('button')
      const div = button.firstElementChild
      const image = div.firstElementChild

      document.body.setAttribute('data-theme', 'light')
      fireEvent.click(button)
      expect(document.body.getAttribute('data-theme')).toBe('dark')
      expect(image).toHaveAttribute('alt', 'Dark Theme Logo')
    })

    it('should change image & theme to light if current one is dark', () => {
      render(<ToggleTheme />)
      const button = screen.getByRole('button')
      const div = button.firstElementChild
      const image = div.firstElementChild

      document.body.setAttribute('data-theme', 'dark')
      fireEvent.click(button)
      expect(document.body.getAttribute('data-theme')).toBe('light')
      expect(image).toHaveAttribute('alt', 'Light Theme Logo')
    })

    it('when the page loads should change body theme based on previously saved on cookies', () => {
      render(<ToggleTheme />)
      const loadedTheme = CookiesThemeManager.getCurrentTheme()

      expect(document.body.getAttribute('data-theme')).toBe(
        loadedTheme === 'dark' ? 'dark' : 'light'
      )
    })

    it(`when the page loads and there's no previous theme saved, should start with the light theme`, () => {
      clearAllCookies()
      render(<ToggleTheme />)

      const cookieDataTheme = CookiesThemeManager.getCurrentTheme()

      const dataTheme = document.body.getAttribute('data-theme')

      expect(cookieDataTheme).toBe(undefined)
      expect(dataTheme).toBe('light')
    })
  })
})
