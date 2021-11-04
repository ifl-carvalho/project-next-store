import { NextPage } from 'next'
import { AppProps } from 'next/app'

import Cookies from 'js-cookie'

import { CartData, CartProvider } from '../contexts/CartContext'
import { CategoriesProvider } from '../contexts/CategoriesContext'
import { ProductsProvider } from '../contexts/ProductsContext'

import '../styles/globals.scss'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const cart = (Cookies.getJSON('cartData') ?? []) as CartData[]

  return (
    <CategoriesProvider categoriesData={[]}>
      <ProductsProvider productsData={[]}>
        <CartProvider cartData={cart}>
          <Component {...pageProps} />
        </CartProvider>
      </ProductsProvider>
    </CategoriesProvider>
  )
}

export default MyApp
