import { NextPage } from 'next'
import Image from 'next/image'
import { CSSTransition } from 'react-transition-group'

import { useState } from 'react'
import { useProducts } from '../hooks/useProducts'
import { useParseToDisplayPrice } from '../hooks/useParseToDisplayPrice'

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import styles from '../styles/components/product.module.scss'

interface ProductComponentProps {
  currentProduct: number
}

const Product: NextPage<ProductComponentProps> = (props) => {
  const { currentProduct } = props
  const { name, price, discount, amount, images } = useProducts()[currentProduct]
  const [currentImageState, setCurrentImageState] = useState(images[0].url)
  const [animationState, setAnimationState] = useState(false)

  const isSoldOut = amount == 0 ? true : false
  const hasDiscount = discount > 0 ? true : false

  const discountInCurrency = price * (discount / 100)
  const priceWithDiscount = price - discountInCurrency

  const displayPrice = useParseToDisplayPrice(price)
  const displayPriceWithDiscount = useParseToDisplayPrice(priceWithDiscount)
  const displayDiscountInCurrency = useParseToDisplayPrice(discountInCurrency)

  return (
    <div
      className={styles.product}
      onMouseEnter={(e) => {
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
          enterActive: styles.productEnteringActive,
          enterDone: styles.productEntering,
          exitActive: styles.productExitingActive,
          exitDone: styles.productExiting,
        }}
        component={null}
      >
        <Image
          className="animated"
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
        <a className={styles.cartButton} href="/">
          Adicionar ao <ShoppingCartIcon />
        </a>
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
