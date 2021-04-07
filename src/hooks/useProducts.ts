import { useContext } from 'react'
import { ProductsContext, ProductData } from '../contexts/ProductsContext'

export function useProducts(): ProductData[] {
  const context = useContext(ProductsContext).productList

  return context
}

export function useSetProducts(): (products: ProductData[]) => void {
  const context = useContext(ProductsContext).setProductsList

  return context
}
