import { NextPage } from 'next'

import { Product } from '../product'
import { useProducts } from '../../hooks/useProducts'

import styles from './styles.module.scss'

interface ProductListProps {
  numberOfProducts: number
  displayTag?: string
  displayDiscountOver?: number
  showHeader?: boolean
  headerText?: string
  showSeeMoreButton: boolean
}

export const ProductList: NextPage<ProductListProps> = ({
  numberOfProducts = 4,
  displayTag = '',
  displayDiscountOver = 0,
  showHeader = true,
  headerText = '',
  showSeeMoreButton = false,
}) => {
  const products = useProducts({
    requestedDiscount: displayDiscountOver,
    requestedTag: displayTag,
  }).productList
  const displayedProducts = [] as JSX.Element[]

  if (products?.length) {
    for (let i = 0; i < numberOfProducts && i < products.length; i++) {
      displayedProducts.push(<Product key={products[i].id} currentProduct={products[i]} />)
    }
  }

  return (
    <div className={styles.productList}>
      {showHeader ? (
        <div className={styles.header}>
          <h1>{headerText}</h1>
          {showSeeMoreButton ? <a href="/products"> Ver mais</a> : null}
        </div>
      ) : null}
      <div className={styles.productContainer}>
        {!displayedProducts?.length ? <p>Nenhum produto foi encontrado!</p> : displayedProducts}
      </div>
    </div>
  )
}
