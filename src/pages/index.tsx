import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'

import { ProductList } from '../components/productsDisplay'
import { fetchCategories } from '../services/categories'
import { useCategories } from '../hooks/useCategories'
import { MainDisplay } from '../components/carousel'
import { useProducts } from '../hooks/useProducts'
import { Category, Product } from '../types/api'
import { Footer } from '../components/footer'
import { fetchProducts } from '../services'

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
        <MainDisplay />
        <ProductList
          numberOfProducts={4}
          displayTag={''}
          displayDiscountOver={0}
          showHeader={true}
          headerText={'Mais Vendidos'}
          showSeeMoreButton={true}
        />
        <Footer />
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
