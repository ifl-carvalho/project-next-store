import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/dist/client/router'

import { ProductData } from '../../contexts/ProductsContext'
import { CategoryData } from '../../contexts/CategoriesContext'

interface ProductProps {
  categories: CategoryData[]
  product: ProductData
}

interface Params extends ParsedUrlQuery {
  id: string
}

const Product: NextPage<ProductProps> = ({ categories, product }) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Carregando...</p>
  }

  return <div></div>
}

export default Product

export const getStaticPath: GetStaticPaths = async () => {
  const storeApi = process.env.STORE_PRODUCTS_API || `http://localhost:3333/products/`

  const response = await fetch(`${storeApi}`)
  const data = await response.json()

  const dataReduced = data.slice(0, 500)

  const paths = dataReduced.map((product: ProductData) => {
    return { params: { login: product.id } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<ProductProps> = async ({ params }) => {
  const { id } = params as Params

  const categoryApi = process.env.STORE_CATEGORIES_API || `http://localhost:3333/categories/`
  const storeApi = process.env.STORE_PRODUCTS_API || `http://localhost:3333/products/`

  const categoriesResponse = await fetch(`${categoryApi}`)
  const categoriesData = await categoriesResponse.json()

  const productResponse = await fetch(`${storeApi}${id}`)
  const productData = await productResponse.json()

  return {
    props: {
      categories: categoriesData,
      product: productData,
    },
    revalidate: 10,
  }
}
