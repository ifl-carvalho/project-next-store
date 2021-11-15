import { NextPage } from 'next'
import { AppProps } from 'next/app'

import { CategoriesProvider } from '../contexts/CategoriesContext'
import { ProductsProvider } from '../contexts/ProductsContext'
import { CookiesModal } from '../components/cookiesModal'
import { CartProvider } from '../contexts/CartContext'
import { Footer } from '../components/footer'
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
            <Footer />
          </CartProvider>
        </ProductsProvider>
      </CategoriesProvider>
      <CookiesModal />
    </>
  )
}

export default MyApp
