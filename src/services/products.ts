import { ProductsResponse } from '../types/api'

export async function fetchProducts(): Promise<ProductsResponse> {
  const productsResponse = await fetch(`${process.env.MAIN_API}/products`)
  return productsResponse.json()
}
