import React, { FC, ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { CategoriesProvider } from '../../../src/contexts/CategoriesContext'
import { ProductsProvider } from '../../../src/contexts/ProductsContext'
import { CartProvider } from '../../../src/contexts/CartContext'

const AllTheProviders: FC = ({ children }) => {
  return (
    <CategoriesProvider>
      <ProductsProvider>
        <CartProvider>{children}</CartProvider>
      </ProductsProvider>
    </CategoriesProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>): RenderResult =>
  render(ui, { wrapper: AllTheProviders, ...options })

function clearAllCookies(): void {
  const cookies = document.cookie.split(';')

  for (let i = 0; i < cookies.length; i++) {
    const cookie = cookies[i]
    const eqPos = cookie.indexOf('=')
    const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
  }
}

export * from '@testing-library/react'
export { customRender as render }
export { clearAllCookies }
