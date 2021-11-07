import { useState } from 'react'
import { NextPage } from 'next'
import Image from 'next/image'

import { CookiesTermManager } from '../../services/cache/cookiesTerm'

import styles from './styles.module.scss'

interface CookiesModalViewProps {
  onClick: () => void
}

const CookiesModalView: NextPage<CookiesModalViewProps> = ({ onClick }) => {
  return (
    <div className={styles.modal}>
      <p className={styles.modalText}>
        Esse site usa Cookies!
        <br />
        <span>
          O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno
          de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com
          dados do usuário e informações pessoais, pode checkar informações adicionais em{' '}
        </span>
        <a href="/policies">Política de Privacidade</a>.
      </p>
      <button onClick={onClick}>
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
  )
}

export const CookiesModal: NextPage = () => {
  function handleCloseCookies(): void {
    setCookiesModalState(false)
    CookiesTermManager.saveAsAccepted()
  }

  const cookieStatus = CookiesTermManager.getIfAccepted() === 'accepted' ? false : true

  const [cookiesModalState, setCookiesModalState] = useState(cookieStatus)

  return cookiesModalState ? <CookiesModalView onClick={handleCloseCookies} /> : <></>
}
