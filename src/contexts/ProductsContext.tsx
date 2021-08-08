import { NextPage } from 'next'
import { useState, createContext, ReactNode } from 'react'

export interface ProductData {
  id: number
  name: string
  price: string
  discount: string
  amount: string
  title: string
  description: string
  images: Array<ImageData>
  tags: Array<TagData>
}

export interface ImageData {
  id: number
  url: string
}

export interface TagData {
  id: string
  name: string
}

export interface ProductsContextData {
  productList: ProductData[]
  setProductsList: (products: ProductData[]) => void
}

interface ProductsProviderProps {
  children: ReactNode
  productsData: ProductData[]
}

export const ProductsContext = createContext({} as ProductsContextData)

export const ProductsProvider: NextPage<ProductsProviderProps> = function ({
  children,
  productsData,
}) {
  const setProductsList = (productsData: ProductData[]): void => {
    setProductListState({ ...productListState, productList: productsData })
  }

  const [productListState, setProductListState] = useState({
    productList: productsData,
    setProductsList: setProductsList,
  })

  return <ProductsContext.Provider value={productListState}>{children}</ProductsContext.Provider>
}
