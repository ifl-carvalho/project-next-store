import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { CartProvider } from '../contexts/CartContext'
import { CategoriesProvider } from '../contexts/CategoriesContext'
import { ProductsProvider } from '../contexts/ProductsContext'
import { CookiesModal } from '../components/cookiesModal'
import { NavBar } from '../components/navBar'

import '../styles/globals.scss'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <CategoriesProvider>
        <ProductsProvider>
          <CartProvider>
            <Component {...pageProps} />
          </CartProvider>
        </ProductsProvider>
      </CategoriesProvider>
      <CookiesModal />
    </>
  )
}

export default MyApp
