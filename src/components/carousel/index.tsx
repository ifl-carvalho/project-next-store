import { NextPage } from 'next'

import styles from './styles.module.scss'

export const MainDisplay: NextPage = () => {
  return <div data-testid="test" className={styles.mainDisplay}></div>
}
