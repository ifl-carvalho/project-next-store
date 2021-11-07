import { GetStaticProps, NextPage } from 'next'
import { useEffect } from 'react'
import Head from 'next/head'

import { fetchProducts, fetchCategories } from '../services/http/mainApi'
import { useCategories } from '../hooks/useCategories'
import { useProducts } from '../hooks/useProducts'
import { Category, Product } from '../interfaces/mainApi'
import { Index } from '../templates/index'

interface IndexPageProps {
  categories: Category[]
  products: Product[]
}

const IndexPage: NextPage<IndexPageProps> = ({ categories, products }) => {
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
        <Index />
      </main>
    </>
  )
}

export default IndexPage

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
