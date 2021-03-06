import { AppProps } from 'next/app'
import { GetServerSideProps } from 'next'
import '../styles/globals.scss'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req.headers['user-agent'] ?? 'undefined'
  const isMobile = Boolean(
    userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i)
  )

  return {
    props: {
      deviceType: isMobile ? 'mobile' : 'desktop',
    },
  }
}

export default MyApp
