import { NextPage } from 'next'

import Product from './Product'

import styles from '../styles/components/productList.module.scss'
import { useProducts } from '../hooks/useProducts'

const ProductList: NextPage = () => {
  const products = useProducts()
  const displayedProducts = []

  if (products[0]) {
    for (let i = 0; i < 4 && products.length; i++) {
      displayedProducts.push(<Product key={i} currentProduct={i} />)
    }
  } else {
    displayedProducts.push(<p>Nenhum produto foi encontrado!</p>)
  }

  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <h1>Top picks</h1>
        <a href="/"> Ver mais</a>
      </div>
      <div className={styles.productContainer}>{displayedProducts}</div>
    </div>
  )
}

export default ProductList
