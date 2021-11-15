import { useRef } from 'react'
import Image from 'next/image'

import styles from './styles.module.scss'

export function Input(): JSX.Element {
  const email = useRef<HTMLInputElement>(null)

  function handleSubmit(): void {
    console.log(email.current.value.replace(/\s/g, ''))
  }

  return (
    <div className={styles.container}>
      <input
        alt="newsletter input"
        autoComplete="off"
        autoCorrect="off"
        type="email"
        placeholder="E-mail"
        ref={email}
      />
      <button onClick={handleSubmit} className={styles.button}>
        <Image
          src="/icons/email.svg"
          alt="email"
          height={25}
          width={25}
          layout="fixed"
          objectFit="cover"
        />
      </button>
    </div>
  )
}
