export interface ProductsResponse {
  pageCount: number
  products: Product[]
}

export interface Category {
  id: number
  name: string
  images: ImageData[]
  tags: Tag[]
}

export interface Product {
  id: number
  name: string
  price: string
  discount: string
  amount: string
  title: string
  description: string
  images: Image[]
  tags: Tag[]
}

export interface Image {
  id: number
  url: string
}

export interface Tag {
  id: number
  name: string
}
