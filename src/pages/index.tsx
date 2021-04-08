import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { ProductData, ProductsProvider } from '../contexts/ProductsContext'
import { CategoryData, CategoriesProvider } from '../contexts/CategoriesContext'
import { DeviceProvider } from '../contexts/DeviceContext'

import Footer from '../components/Footer'
import ProductList from '../components/ProductList'
import CookiesModal from '../components/CookiesModal'

import styles from '../styles/pages/index.module.scss'

interface IndexProps {
  categories: CategoryData[]
  products: ProductData[]
  deviceType: string
}

const Index: NextPage<IndexProps> = ({ deviceType, categories, products }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <DeviceProvider deviceType={deviceType}>
        <CategoriesProvider categoriesData={categories}>
          <ProductsProvider productsData={products}>
            <main>
              <ProductList />
              <Footer />
              <CookiesModal />
            </main>
          </ProductsProvider>
        </CategoriesProvider>
      </DeviceProvider>
    </>
  )
}
export default Index

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'] as string

  const categoryApi = process.env.NEXT_CATEGORIES_API || `http://localhost:3000/api/categories/`
  const storeApi = process.env.NEXT_PRODUCTS_API || `http://localhost:3000/api/products/`

  const categoriesResponse = await fetch(`${categoryApi}`)
  const categoriesResponseJson = await categoriesResponse.json()

  const productsResponse = await fetch(`${storeApi}`)
  const productsResponseJson = await productsResponse.json()

  return {
    props: {
      categories: categoriesResponseJson,
      products: productsResponseJson,
      deviceType: userAgent,
    },
  }
}
