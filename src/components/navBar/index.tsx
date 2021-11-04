import { NextPage } from 'next'
import Image from 'next/image'

import { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { useScrollEvent } from '../../hooks/useScrollEvent'
import { useResizeEvent } from '../../hooks/useResizeEvent'

import styles from './styles.module.scss'

export const NavBar: NextPage = () => {
  const [navBarPositionFixed, setNavBarPositionFixed] = useState(false)
  const [screenIsNarrow, setScreenIsNarrow] = useState(false)
  const [menuIsMoving, setMenuIsMoving] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const icons = navBarPositionFixed
    ? { logo: 'logo_black', menu: 'menu_black', search: 'search_black', cart: 'cart-open_black' }
    : { logo: 'logo_white', menu: 'menu_white', search: 'search_white', cart: 'cart-open_white' }

  useScrollEvent((): void => {
    if (scrollY >= 400) {
      setNavBarPositionFixed(true)
    } else {
      setNavBarPositionFixed(false)
    }
  })

  useResizeEvent((): void => {
    if (innerWidth < 920) {
      setScreenIsNarrow(true)
    } else {
      setScreenIsNarrow(false)
    }
  })

  return (
    <div className={styles.fullBar}>
      <div className={styles.infoBar}>
        <a>Av. Paulista, 5909</a>
        <ul>
          <li>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Image
                src="/icons/instagram_white.svg"
                alt="instagram"
                height={18}
                width={18}
                layout="fixed"
                objectFit="cover"
              />
            </a>
          </li>
          <li>
            <a href="http://www.fb.com" target="_blank" rel="noreferrer">
              <Image
                src="/icons/facebook_white.svg"
                alt="facebook"
                height={18}
                width={18}
                layout="fixed"
                objectFit="cover"
              />
            </a>
          </li>
        </ul>
      </div>

      <CSSTransition
        in={navBarPositionFixed}
        timeout={100}
        classNames={{
          enterActive: styles.fullBarEntering,
          enterDone: styles.fullBarEntered,
          exitActive: styles.fullBarExiting,
          exitDone: styles.fullBarExited,
        }}
        component={null}
      >
        <div className={styles.navBar}>
          <div>
            <a className={styles.logoButton} href="/">
              <Image
                src={`/${icons.logo}.svg`}
                alt="logo"
                height={60}
                width={240}
                layout="fixed"
                objectFit="cover"
              />
            </a>
          </div>
          {screenIsNarrow ? (
            <div className={styles.menuButtonNarrow}>
              <button
                onClick={() => {
                  setMenuIsMoving(true)
                  document.body.style.overflow = 'hidden'
                }}
              >
                <Image
                  src={`/icons/${icons.menu}.svg`}
                  alt="menu"
                  height={32}
                  width={32}
                  layout="fixed"
                  objectFit="cover"
                />
              </button>
            </div>
          ) : (
            <div className={styles.menuWide}>
              <a>Produtos</a>
              <a>Lançamento</a>
              <a>Promoções</a>
            </div>
          )}
          <div>
            <button>
              <Image
                src={`/icons/${icons.search}.svg`}
                alt="search"
                height={32}
                width={32}
                layout="fixed"
                objectFit="cover"
              />
            </button>
            <a href="/cart">
              <Image
                src={`/icons/${icons.cart}.svg`}
                alt="cart"
                height={32}
                width={32}
                layout="fixed"
                objectFit="cover"
              />
            </a>
          </div>
        </div>
      </CSSTransition>
      {screenIsNarrow ? (
        <CSSTransition
          in={menuIsMoving}
          timeout={100}
          classNames={{
            enterActive: styles.menuNarrowEntering,
            enterDone: styles.menuNarrowEntered,
            exitActive: styles.menuNarrowExiting,
            exitDone: styles.menuNarrowExited,
          }}
          addEndListener={() => setMenuIsOpen(!menuIsOpen)}
          component={null}
        >
          <div className={styles.menuNarrowBackground}>
            <div className={styles.menuNarrow}>
              <div>
                <button
                  onClick={() => {
                    setMenuIsMoving(false)
                    document.body.style.overflow = 'unset'
                  }}
                >
                  <Image
                    src="/icons/close.svg"
                    alt="close"
                    height={36}
                    width={36}
                    layout="fixed"
                    objectFit="cover"
                  />
                </button>
              </div>
              <ul>
                <CSSTransition
                  in={menuIsOpen}
                  timeout={200}
                  classNames={{
                    enterActive: styles.menuCategoryEntering,
                    enterDone: styles.menuCategoryEntered,
                    exitActive: styles.menuCategoryExiting,
                    exitDone: styles.menuCategoryExited,
                  }}
                  component={null}
                >
                  <li>
                    <a>Produtos</a>
                    <button>
                      <Image
                        src="/icons/arrow_expand.svg"
                        alt="arrow"
                        height={20}
                        width={20}
                        layout="fixed"
                        objectFit="cover"
                      />
                    </button>
                  </li>
                </CSSTransition>
                <CSSTransition
                  in={menuIsOpen}
                  timeout={300}
                  classNames={{
                    enterActive: styles.menuCategoryEntering,
                    enterDone: styles.menuCategoryEntered,
                    exitActive: styles.menuCategoryExiting,
                    exitDone: styles.menuCategoryExited,
                  }}
                  component={null}
                >
                  <li>
                    <a>Lançamento</a>
                  </li>
                </CSSTransition>
                <CSSTransition
                  in={menuIsOpen}
                  timeout={400}
                  classNames={{
                    enterActive: styles.menuCategoryEntering,
                    enterDone: styles.menuCategoryEntered,
                    exitActive: styles.menuCategoryxiting,
                    exitDone: styles.menuCategoryExited,
                  }}
                  component={null}
                >
                  <li>
                    <a>Promoções</a>
                  </li>
                </CSSTransition>
              </ul>
            </div>
          </div>
        </CSSTransition>
      ) : (
        <CSSTransition
          in={navBarPositionFixed}
          timeout={100}
          classNames={{
            enterActive: styles.fullBarEntering,
            enterDone: styles.fullBarEntered,
            exitActive: styles.fullBarExiting,
            exitDone: styles.fullBarExited,
          }}
          component={null}
        >
          <div className={styles.menu}></div>
        </CSSTransition>
      )}
    </div>
  )
}
