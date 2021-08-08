import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Cart from '../components/Cart'
import CookiesModal from '../components/CookiesModal'
import Footer from '../components/Footer'
import MainDisplay from '../components/MainDisplay'
import NavBar from '../components/NavBar'
import ProductsDisplay from '../components/ProductsDisplay'
import { CategoryData } from '../contexts/CategoriesContext'
import { ProductData } from '../contexts/ProductsContext'
import { useCategories } from '../hooks/useCategories'
import { useProducts } from '../hooks/useProducts'




interface IndexProps {
  categories: CategoryData[]
  products: ProductData[]
}

const Index: NextPage<IndexProps> = ({ categories, products }) => {
  useCategories().setCategoryList(categories)
  useProducts().setProductsList(products)

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <NavBar />
        <MainDisplay />
        <ProductsDisplay
          numberOfProducts={4}
          displayTag={''}
          displayDiscountOver={0}
          showHeader={true}
          headerText={'Mais Vendidos'}
          showSeeMoreButton={true}
        />
        <Cart />
        <Footer />
        <CookiesModal />
      </main>
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
      products: productsData.products,
    },
    revalidate: 10,
  }
}
