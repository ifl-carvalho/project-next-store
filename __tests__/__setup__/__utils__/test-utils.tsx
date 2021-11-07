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

export * from '@testing-library/react'
export { customRender as render }
