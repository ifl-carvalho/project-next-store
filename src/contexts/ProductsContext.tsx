import { NextPage } from 'next'
import { useState, createContext, ReactNode } from 'react'
import { Product } from '../interfaces/mainApi'

export interface ProductsContextData {
  productList: Product[]
  setProductsList: (products: Product[]) => void
}

interface ProductsProviderProps {
  children: ReactNode
  productsData?: Product[]
}

export const ProductsContext = createContext({} as ProductsContextData)

export const ProductsProvider: NextPage<ProductsProviderProps> = function ({
  children,
  productsData = [],
}) {
  const setProductsList = (productsData: Product[]): void => {
    setProductListState({ ...productListState, productList: productsData })
  }

  const [productListState, setProductListState] = useState({
    productList: productsData,
    setProductsList: setProductsList,
  })

  return <ProductsContext.Provider value={productListState}>{children}</ProductsContext.Provider>
}
