import { NextPage } from 'next'
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
      <div className={styles.ToolBar}>
        <a>About us</a>
        <ul>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <img src="./icons/instagram.svg" alt="" />
          </a>
          <a href="http://www.fb.com" target="_blank" rel="noreferrer">
            <img src="./icons/facebook.svg" alt="" />
          </a>
        </ul>
      </div>

      <div className={styles.BehindNavBar}>
        <nav className={followNavBar ? styles.NavBar2 : styles.NavBar}>
          <div className={styles.NavBar}>
            <div className={styles.NavBarTopSection}>
              <a className={styles.SearchIcon}>
                <img src="./icons/search.svg" alt="SearchIcon" />
              </a>
              <img className={styles.logo} src="./googlelogo.png" />
              <ul>
                <a>
                  <img src="./icons/login.svg" alt="Login" />
                </a>
                <a>
                  <img src="./icons/cart.svg" alt="" />
                </a>
              </ul>
            </div>
            <ul>
              <a
                href="/"
                onMouseOver={() => {
                  setshopSectionOn(styles.shopButton)
                }}
                onMouseOut={() => {
                  setshopSectionOn(styles.ShopSection)
                }}
              >
                Shop
              </a>
              <a href="">New Arrivals</a>
              <a href="">Best Sellers</a>
              <a href="">Sale</a>
            </ul>
          </div>
        </nav>
      </div>

      <div
        className={shopSectionOff}
        onMouseOver={() => {
          setshopSectionOn(styles.shopButton)
        }}
        onMouseOut={() => {
          setshopSectionOn(styles.ShopSection)
        }}
      >
        <div>
          <h4>Aparencia</h4>
        </div>
        <div>
          <h4>Acessorios</h4>
        </div>
        <div>
          <h4>Cuidado com a pele</h4>
        </div>
        <div>
          <h4>Outros</h4>
        </div>
      </div>
    </>
  )
}

export default NavBar
