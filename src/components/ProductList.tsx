import { NextPage } from 'next'

import Product from './Product'

import styles from '../styles/components/productList.module.scss'

const ProductList: NextPage = () => {
  return (
    <div className={styles.productList}>
      <div className={styles.header}>
        <h1>Top picks</h1>
        <a href="/"> Ver mais</a>
      </div>
      <div className={styles.productContainer}>
        <Product currentProduct={0} />
        <Product currentProduct={1} />
        <Product currentProduct={2} />
        <Product currentProduct={3} />
      </div>
    </div>
  )
}

export default ProductList
