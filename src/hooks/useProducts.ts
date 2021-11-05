import { useContext } from 'react'
import { ProductsContext, ProductsContextData } from '../contexts/ProductsContext'

interface UseProductsProps {
  requestedDiscount?: number
  requestedTag?: string
}

export function useProducts({
  requestedDiscount,
  requestedTag,
}: UseProductsProps = {}): ProductsContextData {
  const setProductsList = useContext(ProductsContext).setProductsList
  let products = useContext(ProductsContext).productList

  if (requestedTag) {
    products = products.filter((product) =>
      product.tags.some((tag) => tag.name.toLocaleLowerCase() == requestedTag.toLocaleLowerCase())
    )
  }

  if (requestedDiscount && requestedDiscount <= 100) {
    products = products.filter((product) => Number(product.discount) > requestedDiscount)
  }

  return { productList: products, setProductsList: setProductsList }
}
