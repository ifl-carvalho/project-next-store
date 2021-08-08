import { NextPage } from 'next'
import Image from 'next/image'

import { useCart } from '../hooks/useCart'
import { useProducts } from '../hooks/useProducts'

import styles from '../styles/components/cart.module.scss'

const Cart: NextPage = () => {
  const { cartData, removeFromCart } = useCart()
  const products = useProducts()?.filter((product) => cartData?.includes({ id: product.id }))

  const displayItems = []

  const priceTotal =
    typeof products !== 'undefined' && products.length > 0
      ? products
          .map((item) => +item.price)
          .reduce((sum, itemSellingPrice) => sum + itemSellingPrice)
      : null

  const priceTotalWithDiscount =
    typeof products !== 'undefined' && products.length > 0
      ? products
          .map((item) => +item.price - +item.price * (+item.discount / 100))
          .reduce((sum, itemSellingPrice) => sum + itemSellingPrice)
      : null

  for (let i = 0; i < products.length; i++) {
    const { id, name, price, discount, amount, images } = products[i]
    const [priceNumber, discountNumber] = [+price, +discount, +amount]

    const discountInCurrency = priceNumber * (discountNumber / 100)
    const priceWithDiscount = priceNumber - discountInCurrency

    displayItems.push(
      <li className={styles.item} key={id}>
        <div className={styles.itemImage}>
          <Image src={images[1].url} width={105} height={105} layout="fixed" objectFit="cover" />
        </div>
        <div className={styles.itemInfo}>
          <h3>{name}</h3>
          <p className={styles.itemPrice}>{`R$ ${price}`}</p>
          <p className={styles.itemSellingPrice}>{`R$ ${priceWithDiscount}`}</p>
        </div>
        <div className={styles.itemButtons}>
          <button onClick={() => removeFromCart({ id: id })}>
            <Image
              src="/icons/close.svg"
              alt="close"
              height={17}
              width={17}
              layout="fixed"
              objectFit="cover"
            />
          </button>
        </div>
      </li>
    )
  }

  return (
    <div className={styles.cart}>
      <div className={styles.header}>
        <h2>Meu Carrinho</h2>
      </div>
      <div className={styles.listContainer}>
        <ul>{displayItems}</ul>
      </div>
      <div className={styles.priceContainer}>
        <span>Total</span>
        <span>{`R$ ${priceTotal} e ${priceTotalWithDiscount}`}</span>
        {<p>Parabéns, sua compra tem frete grátis !</p>}
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={() => alert('Compra realizada!')}>Finalizar compra</button>
      </div>
    </div>
  )
}

export default Cart
