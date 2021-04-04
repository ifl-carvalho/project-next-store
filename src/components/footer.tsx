import { NextPage } from 'next'

import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'

import styles from '../styles/components/footer.module.scss'
import { useDeviceInformation } from '../hooks/useDeviceInformation'

const Footer: NextPage = () => {
  const { isMobile } = useDeviceInformation().deviceInformation

  const renderedFooter = isMobile ? <div></div> : <div></div>

  return renderedFooter
}

export default Footer
