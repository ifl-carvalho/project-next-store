import { NextPage } from 'next'
import Image from 'next/image'

import styles from './styles.module.scss'

export const Footer: NextPage = () => {
  return (
    <div>
      <a href="/">
        <Image
          src="/logo_black.svg"
          alt="logo"
          height={40}
          width={160}
          layout="fixed"
          objectFit="cover"
        />
      </a>
      <ul>
        <li></li>
      </ul>
      <ul>
        <li></li>
      </ul>
      <div>
        <h3>Inscreva-se!</h3>
        <p>Seja o primeiro a saber sobre promoções!</p>
        <div>
          <input></input>
          <button>
            <Image
              src="/icons/email.svg"
              alt="email"
              height={18}
              width={18}
              layout="fixed"
              objectFit="cover"
            />
          </button>
        </div>
        <div>
          <ul>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
              <Image
                src="/icons/instagram_black.svg"
                alt="instagram"
                height={18}
                width={18}
                layout="fixed"
                objectFit="cover"
              />
            </a>
            <a href="http://www.fb.com" target="_blank" rel="noreferrer">
              <Image
                src="/icons/facebook_black.svg"
                alt="facebook"
                height={18}
                width={18}
                layout="fixed"
                objectFit="cover"
              />
            </a>
          </ul>
        </div>
      </div>
    </div>
  )
}
