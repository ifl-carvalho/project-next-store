import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/dist/client/router'

import { ProductData } from '../../contexts/ProductsContext'
import { CategoryData } from '../../contexts/CategoriesContext'
import Loading from '../../components/Loading'

interface ProductProps {
  id: string
  categories: CategoryData[]
  products: ProductData[]
}

interface Params extends ParsedUrlQuery {
  id: string
}

const Product: NextPage<ProductProps> = ({ id, categories, products }) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <Loading />
  }

  return <div>{(categories[0].name, products[0].name, id)}</div>
}

export default Product

export const getStaticPath: GetStaticPaths = async () => {
  const storeApi = process.env.STORE_PRODUCTS_API || `http://localhost:3333/products/`

  const response = await fetch(`${storeApi}`)
  const data = await response.json()

  const dataReduced = data.slice(0, 500)

  const paths = dataReduced.map((product: ProductData) => {
    return { params: { id: product.id } }
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

  const productResponse = await fetch(`${storeApi}`)
  const productData = await productResponse.json()

  return {
    props: {
      id: id,
      categories: categoriesData,
      products: productData,
    },
    revalidate: 10,
  }
}
