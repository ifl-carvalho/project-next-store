import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { useRouter } from 'next/dist/client/router'

import { ProductData } from '../../contexts/ProductsContext'
import { CategoryData } from '../../contexts/CategoriesContext'
import Loading from '../../components/Loading'

interface CategoryProps {
  id: string
  categories: CategoryData[]
  products: ProductData[]
}

interface Params extends ParsedUrlQuery {
  id: string
}

const Product: NextPage<CategoryProps> = ({ id, categories, products }) => {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <Loading />
  }

  return <div></div>
}

export default Product

export const getStaticPath: GetStaticPaths = async () => {
  const categoryApi = process.env.STORE_CATEGORIES_API

  const response = await fetch(`${categoryApi}`)
  const data = await response.json()

  const dataReduced = data.slice(0, 500)

  const paths = dataReduced.map((category: CategoryData) => {
    return { params: { id: category.id } }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<CategoryProps> = async ({ params }) => {
  const { category } = params as Params

  const categoryApi = process.env.STORE_CATEGORIES_API || `http://localhost:3333/category/`
  const storeApi = process.env.STORE_PRODUCTS_API_QUERY || `http://localhost:3333/products/page`

  const categoriesResponse = await fetch(`${categoryApi}${id}`)
  const categoriesData = await categoriesResponse.json()

  const productsResponse = await fetch(
    `${storeApi}?category=${category}&skip=${page}&take=${500}&order=${order}`
  )
  const productsData = await productsResponse.json()

  return {
    props: {
      id: id,
      categories: categoriesData,
      products: productsData,
    },
    revalidate: 10,
  }
}
