import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import { ProductData, ProductsProvider } from '../contexts/ProductsContext'
import { CategoryData, CategoriesProvider } from '../contexts/CategoriesContext'

import NavBar from '../components/NavBar'
import ProductsDisplay from '../components/ProductsDisplay'
import Footer from '../components/Footer'
import CookiesModal from '../components/CookiesModal'

import styles from '../styles/pages/index.module.scss'

interface IndexProps {
  categories: CategoryData[]
  products: ProductData[]
}

const Index: NextPage<IndexProps> = ({ categories, products }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <CategoriesProvider categoriesData={categories}>
        <ProductsProvider productsData={products}>
          <main>
            <NavBar />
            <ProductsDisplay
              numberOfProducts={4}
              displayTag={''}
              displayDiscountOver={0}
              showHeader={true}
              headerText={'Mais Vendidos'}
              showSeeMoreButton={true}
            />
            <div className={styles.emptyBox} />
            <Footer />
            <CookiesModal />
          </main>
        </ProductsProvider>
      </CategoriesProvider>
    </>
  )
}
export default Index

export const getStaticProps: GetStaticProps = async () => {
  const categoryApi = process.env.STORE_CATEGORIES_API || `http://localhost:3333/categories/`
  const storeApi = process.env.STORE_PRODUCTS_API || `http://localhost:3333/products/`

  const categoriesResponse = await fetch(`${categoryApi}`)
  const categoriesData = await categoriesResponse.json()

  const productsResponse = await fetch(`${storeApi}`)
  const productsData = await productsResponse.json()

  return {
    props: {
      categories: categoriesData,
      products: productsData,
    },
    revalidate: 10,
  }
}
