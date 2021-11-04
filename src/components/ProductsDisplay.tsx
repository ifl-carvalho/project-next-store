import { NextPage } from 'next'

import Product from './Product'
import { useProducts } from '../hooks/useProducts'

import styles from '../styles/components/productList.module.scss'

interface ProductListProps {
  numberOfProducts: number
  displayTag?: string
  displayDiscountOver?: number
  showHeader?: boolean
  headerText?: string
  showSeeMoreButton: boolean
}

const ProductList: NextPage<ProductListProps> = ({
  numberOfProducts,
  displayTag,
  displayDiscountOver,
  showHeader,
  headerText,
  showSeeMoreButton,
}) => {
  const products = useProducts({ requestedDiscount: displayDiscountOver, requestedTag: displayTag })
    .productList
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

ProductList.defaultProps = {
  numberOfProducts: 4,
  displayTag: '',
  displayDiscountOver: 0,
  showHeader: true,
  headerText: '',
  showSeeMoreButton: false,
}

export default ProductList
