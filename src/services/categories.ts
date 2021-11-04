import { ProductsResponse } from '../types/api'

export async function fetchCategories(): Promise<ProductsResponse> {
  const categoriesResponse = await fetch(`${process.env.MAIN_API}/categories`)
  return categoriesResponse.json()
}
