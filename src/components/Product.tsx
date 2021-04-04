import { NextPage } from 'next'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'

import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'

import styles from '../styles/components/product.module.scss'

interface ProductComponentProps {
  currentProduct: number
}

const Product: NextPage<ProductComponentProps> = (props) => {
  const { currentProduct } = props
  const { name, price, discount, amount, images } = useProducts().productList[currentProduct]
  const [currentImageState, setCurrentImageState] = useState(images[0].url)
  const [animationState, setAnimationState] = useState(false)

  const isSoldOut = amount == 0 ? true : false
  const hasDiscount = discount > 0 ? true : false

  const discoutInCurrency = price * (discount / 100)
  const priceWithDiscount = price - discoutInCurrency

  return (
    <div className={styles.product}>
      {isSoldOut ? (
        <p className={`${styles.productTag} ${styles.tagSoldOut}`}>Esgotado</p>
      ) : hasDiscount ? (
        <p className={`${styles.productTag} ${styles.tagOnSale}`}>Promoção</p>
      ) : null}

      <CSSTransition
        in={animationState}
        timeout={100}
        classNames={{
          enterActive: styles.productEnteringActive,
          enterDone: styles.productEntering,
          exitActive: styles.productExiting,
          exitDone: styles.productExitingActive,
        }}
      >
        <Image
          className="animated"
          src={currentImageState}
          onMouseOver={() => {
            setCurrentImageState(images[1].url)
            setAnimationState(true)
          }}
          onMouseOut={() => {
            setCurrentImageState(images[0].url)
            setAnimationState(false)
          }}
          width={300}
          height={300}
          layout="responsive"
          objectFit="cover"
        />
      </CSSTransition>
      <h1>{name}</h1>
      <div className={styles.priceContainer}>
        {hasDiscount ? (
          <>
            <span className={styles.priceOnSale}>R${price}</span>
            <span>R${`${priceWithDiscount.toFixed(2)}`}</span>
            <span className={styles.discoutOnSale}>
              Economize R${`${discoutInCurrency.toFixed(2)}`}
            </span>
          </>
        ) : (
          <span>R${price}</span>
        )}
      </div>
      <a href="/">Colocar no </a>
    </div>
  )
}

export default Product
