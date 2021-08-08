import { NextPage } from 'next'
import { AppProps } from 'next/app'
import useSWR from 'swr'

import Cookies from 'js-cookie'

import { CartData, CartProvider } from '../contexts/CartContext'
import { CategoriesProvider } from '../contexts/CategoriesContext'
import { ProductsProvider } from '../contexts/ProductsContext'

import '../styles/globals.scss'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  const cart = (Cookies.getJSON('cartData') ?? []) as CartData[]

  useSWR()

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

async function cartFetcher(cartDataInCookies): CartData[] {
  if (cartDataInCookies?.lenght >= 0) {
    cartDataInCookies.map((item: CartData) => `id=${item.id}&`)

    const productsResponse = await fetch(`${storeApi}`)
    const productsData = await productsResponse.json()

    return cartDataInCookies
  }

  return []
}
