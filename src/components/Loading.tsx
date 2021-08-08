import { NextPage } from 'next'
import Image from 'next/image'

import styles from '../styles/components/loading.module.scss'

const Loading: NextPage = () => {
  return (
    <div className={styles.loading}>
      <div>
        <Image
          src="/icons/mars.svg"
          alt="cart"
          height={96}
          width={96}
          layout="fixed"
          objectFit="cover"
        />
        <Image
          src="/icons/cart-open_black.svg"
          alt="cart"
          height={53}
          width={53}
          layout="fixed"
          objectFit="cover"
        />
      </div>
    </div>
  )
}

export default Loading
