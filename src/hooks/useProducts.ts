import { useContext } from 'react'
import { ProductsContext, ProductData } from '../contexts/ProductsContext'

interface UseProductsProps {
  requestedDiscount: number
  requestedTag: string
}

export function useProducts({
  requestedDiscount,
  requestedTag,
}: Partial<UseProductsProps> = {}): ProductData[] {
  let products = useContext(ProductsContext).productList

  if (requestedTag) {
    products = products.filter((product) =>
      product.tags.some((tag) => tag.name.toLocaleLowerCase() == requestedTag.toLocaleLowerCase())
    )
  }

  if (requestedDiscount && requestedDiscount <= 100) {
    products = products.filter((product) => product.discount > requestedDiscount)
  }

  return products
}

export function useSetProducts(products: ProductData[]): void {
  useContext(ProductsContext).setProductsList(products)
}
