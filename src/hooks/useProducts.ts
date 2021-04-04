import { useContext } from 'react'
import { ProductsContext, ProductsContextData } from '../contexts/ProductsContext'

export function useProducts(): ProductsContextData {
  const context = useContext(ProductsContext)

  return context
}
