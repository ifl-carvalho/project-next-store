import { NextPage } from 'next'
import Image from 'next/image'
import React, { useState } from 'react'

import styles from '../styles/components/navBar.module.scss'

const NavBar: NextPage = () => {
  const [shopSectionOff, setshopSectionOn] = useState(styles.ShopSection)
  const [followNavBar, setFollowNavBar] = useState(false)

  const changefollowNavBar = (): void => {
    if (window.scrollY >= 400) {
      setFollowNavBar(true)
    } else {
      setFollowNavBar(false)
    }
  }

  if (typeof window !== 'undefined') window.addEventListener('scroll', changefollowNavBar)

  return (
    <>
      <div className={styles.toolBar}>
        <a>Av. Paulista, 5909</a>
        <ul>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <Image
              src="/icons/instagram.svg"
              alt="instagram"
              height={18}
              width={18}
              layout="fixed"
              objectFit="cover"
            />
          </a>
          <a href="http://www.fb.com" target="_blank" rel="noreferrer">
            <Image
              src="/icons/facebook.svg"
              alt="facebook"
              height={18}
              width={18}
              layout="fixed"
              objectFit="cover"
            />
          </a>
        </ul>
      </div>

      <div className={styles.navBar}>
        <a href="/">
          <Image
            src="/logo.svg"
            alt="logo"
            height={40}
            width={160}
            layout="fixed"
            objectFit="cover"
          />
        </a>
        <div className={styles.menuDesktop}>
          <a>Produtos</a>
          <a>Lançamento</a>
          <a>Promoções</a>
        </div>
        <div>
          <button>
            <Image
              src="/icons/search.svg"
              alt="search"
              height={32}
              width={32}
              layout="fixed"
              objectFit="cover"
            />
          </button>
          <a href="/cart">
            <Image
              src="/icons/cart-open.svg"
              alt="cart"
              height={32}
              width={32}
              layout="fixed"
              objectFit="cover"
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default NavBar
