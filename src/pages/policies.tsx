import { NextPage } from 'next'
import Head from 'next/head'

import { Policies } from '../templates/policies'

const PoliciesPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <Policies />
      </main>
    </>
  )
}

export default PoliciesPage
