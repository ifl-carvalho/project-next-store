import { NextPage } from 'next'

import { useDeviceDetect } from '../hooks/useDeviceDetect'

import styles from '../styles/components/footer.module.scss'

const Footer: NextPage = () => {
  const { isMobile } = useDeviceDetect()

  const renderedFooter = isMobile ? <div></div> : <div></div>

  return renderedFooter
}

export default Footer
