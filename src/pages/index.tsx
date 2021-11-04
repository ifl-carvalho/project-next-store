import { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'
import CookiesModal from '../components/CookiesModal'
import Footer from '../components/Footer'
import MainDisplay from '../components/MainDisplay'
import NavBar from '../components/NavBar'
import ProductsDisplay from '../components/ProductsDisplay'
import { useCategories } from '../hooks/useCategories'
import { useProducts } from '../hooks/useProducts'
import { fetchProducts } from '../services'
import { fetchCategories } from '../services/categories'
import { Category, Product } from '../types/api'

interface IndexProps {
  categories: Category[]
  products: Product[]
}

const Index: NextPage<IndexProps> = ({ categories, products }) => {
  const { setCategoryList } = useCategories()
  const { setProductsList } = useProducts()

  useEffect(() => {
    setCategoryList(categories)
    setProductsList(products)
  }, [categories, products, setCategoryList, setProductsList])

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
        <Footer />
        <CookiesModal />
      </main>
    </>
  )
}

export default Index

export const getStaticProps: GetStaticProps = async () => {
  const categoriesData = await fetchCategories()
  const productsData = await fetchProducts()

  return {
    props: {
      categories: categoriesData,
      products: productsData.products,
    },
    revalidate: 10,
  }
}
