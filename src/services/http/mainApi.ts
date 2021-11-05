import { ProductsResponse } from '../../types/mainApi'

export async function fetchProducts(): Promise<ProductsResponse> {
  const productsResponse = await fetch(`${process.env.MAIN_API}/products`)
  return productsResponse.json()
}

export async function fetchCategories(): Promise<ProductsResponse> {
  const categoriesResponse = await fetch(`${process.env.MAIN_API}/categories`)
  return categoriesResponse.json()
}
