import { NextPage } from 'next'
import { useState } from 'react'

import CloseIcon from '@material-ui/icons/Close'

import styles from '../styles/components/cookiesModal.module.scss'

interface CookiesModalViewProps {
  onClick: () => void
}

export const CookiesModalView: NextPage<CookiesModalViewProps> = ({ onClick }) => {
  return (
    <div className={styles.banner}>
      <p className={styles.bannerText}>
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
        <CloseIcon fontSize="large" />
      </button>
    </div>
  )
}

const CookiesModal: NextPage = () => {
  const [cookiesModalState, setCookiesModalState] = useState(true)

  return cookiesModalState ? <CookiesModalView onClick={() => setCookiesModalState(false)} /> : null
}

export default CookiesModal
