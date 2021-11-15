import { NextPage } from 'next'
import Image from 'next/image'

import { Input } from './components/input'
import { ToggleTheme } from './components/toggleTheme'

import styles from './styles.module.scss'

interface IListItem {
  title: string
  href?: string
}

export const Footer: NextPage = () => {
  const currentYear = new Date().getFullYear()

  const ListItem = ({ title, href }: IListItem): JSX.Element => (
    <li>
      <a href={href}>{title}</a>
    </li>
  )

  return (
    <footer className={styles.container}>
      <div className={styles.gridContainer}>
        <div className={styles.newsletter}>
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
          </div>

          <h3>Fique atento!</h3>
          <p>Seja o primeiro a saber sobre promoções!</p>
          <Input />
          <ul>
            <li>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/instagram_black.svg"
                  alt="instagram"
                  height={25}
                  width={25}
                  layout="fixed"
                  objectFit="cover"
                />
              </a>
            </li>
            <li>
              <a href="http://www.fb.com" target="_blank" rel="noreferrer">
                <Image
                  src="/icons/facebook_black.svg"
                  alt="facebook"
                  height={25}
                  width={25}
                  layout="fixed"
                  objectFit="cover"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerList}>
          <h3>Informações Gerais</h3>
          <ul>
            <ListItem href={'/sobre'} title={'Sobre Nós'} />
            <ListItem href={'/loja'} title={'Nossa Loja'} />
            <ListItem href={'/programa-embaixadores'} title={'Programa de embaixadores'} />
            <ListItem href={'/tamanhos'} title={'Tamanhos'} />
          </ul>
        </div>
        <div className={styles.footerList}>
          <h3>Ajuda</h3>
          <ul>
            <ListItem href={'/contato'} title={'Entre em contato'} />
            <ListItem href={'/trocas-devolucoes'} title={'Trocas e Devoluções'} />
            <ListItem href={'/contato'} title={'Entre em contato'} />
            <ListItem href={'/envio'} title={'Envio'} />
            <ListItem href={'/faq'} title={'FAQ'} />
            <ListItem
              href={'/atacado-vendas-personalizadas'}
              title={'Atacado & Vendas Personalizadas'}
            />
          </ul>
        </div>
        <div className={styles.footerList}>
          <h3>Social</h3>
          <ul>
            <ListItem href={'/nossos-embaixadores'} title={'Nossos embaixadores'} />
            <ListItem href={'/eventos'} title={'Eventos'} />
          </ul>
          <div className={styles.toggleThemeContainer}>
            <ToggleTheme />
          </div>
        </div>
      </div>
      <h6>&#xa9;{currentYear}&#xa0;logoipsum</h6>
      <h6>E-commerce software by bananitalo Corp</h6>
    </footer>
  )
}
