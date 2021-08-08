import { NextPage } from 'next'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'

import { useState } from 'react'
import { ProductData } from '../contexts/ProductsContext'
import { useParseToDisplayPrice } from '../hooks/useParseToDisplayPrice'

import styles from '../styles/components/product.module.scss'
import { useCart } from '../hooks/useCart'

interface ProductComponentProps {
  currentProduct: ProductData
}

const Product: NextPage<ProductComponentProps> = ({ currentProduct }) => {
  const { id, name, price, discount, amount, images } = currentProduct
  const [priceNumber, discountNumber, amountNumber] = [+price, +discount, +amount]

  const { addToCart } = useCart()

  const [currentImageState, setCurrentImageState] = useState(images[0].url)
  const [animationState, setAnimationState] = useState(false)

  const isSoldOut = amountNumber == 0 ? true : false
  const hasDiscount = discountNumber > 0 ? true : false

  const discountInCurrency = priceNumber * (discountNumber / 100)
  const priceWithDiscount = priceNumber - discountInCurrency

  const displayPrice = useParseToDisplayPrice(priceNumber)
  const displayPriceWithDiscount = useParseToDisplayPrice(priceWithDiscount)
  const displayDiscountInCurrency = useParseToDisplayPrice(discountInCurrency)

  return (
    <div
      className={styles.product}
      onMouseEnter={() => {
        setCurrentImageState(images[1].url)
        setAnimationState(true)
      }}
      onMouseLeave={() => {
        setCurrentImageState(images[0].url)
        setAnimationState(false)
      }}
    >
      {isSoldOut ? (
        <p className={`${styles.sign} ${styles.signSoldOut}`}>Esgotado</p>
      ) : hasDiscount ? (
        <p className={`${styles.sign} ${styles.signOnSale}`}>Promoção</p>
      ) : null}
      <CSSTransition
        in={animationState}
        timeout={100}
        classNames={{
          enterActive: styles.productEntering,
          enterDone: styles.productEntered,
          exitActive: styles.productExiting,
          exitDone: styles.productExited,
        }}
        component={null}
      >
        <Image
          src={currentImageState}
          width={250}
          height={250}
          layout="responsive"
          objectFit="cover"
        />
      </CSSTransition>
      <CSSTransition
        in={animationState}
        timeout={200}
        classNames={{
          enterActive: styles.cartButtonEntering,
          enterDone: styles.cartButtonEntered,
          exitActive: styles.cartButtonExiting,
          exitDone: styles.cartButtonExited,
        }}
        component={null}
      >
        <button className={styles.cartButton} onClick={() => addToCart({ id: id })}>
          Adicionar ao
          <Image
            src="/icons/cart-filled.svg"
            alt="cart"
            height={17}
            width={17}
            layout="fixed"
            objectFit="cover"
          />
        </button>
      </CSSTransition>
      <h1>{name}</h1>
      {hasDiscount ? (
        <div className={styles.priceContainer}>
          <div>
            <span className={styles.priceOnSale}>R${displayPrice}</span>
            <span>R${`${displayPriceWithDiscount}`}</span>
          </div>
          <span className={styles.discoutOnSale}>Economize R${`${displayDiscountInCurrency}`}</span>
        </div>
      ) : (
        <div className={styles.priceContainer}>
          <span>R${displayPrice}</span>
        </div>
      )}
    </div>
  )
}

export default Product
