import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import { ProductData, ProductsProvider } from '../contexts/ProductsContext'
import { DeviceProvider } from '../contexts/DeviceContext'

import Footer from '../components/Footer'
import ProductList from '../components/ProductList'

import styles from '../styles/pages/index.module.scss'

interface Props {
  products: ProductData[]
  deviceType: string
}

const Index: NextPage<Props> = ({ products, deviceType }) => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <DeviceProvider deviceType={deviceType}>
        <ProductsProvider productsData={products}>
          <main>
            <ProductList />
            <Footer />
          </main>
        </ProductsProvider>
      </DeviceProvider>
    </>
  )
}
export default Index

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req.headers['user-agent'] as string

  const storeApi = process.env.STORE_NEXT_API || `http://localhost:3000`

  const productsResponse = await fetch(`${storeApi}/api/products/`)
  const productsResponseJson = await productsResponse.json()

  return {
    props: {
      products: productsResponseJson,
      deviceType: userAgent,
    },
  }
}
