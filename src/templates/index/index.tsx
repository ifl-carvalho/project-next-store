import { NextPage } from 'next'
import { MainDisplay } from '../../components/carousel'
import { ProductList } from '../../components/productsList'

export const Index: NextPage = () => {
  return (
    <>
      <MainDisplay />
      <ProductList
        numberOfProducts={4}
        displayTag={''}
        displayDiscountOver={0}
        showHeader={true}
        headerText={'Mais Vendidos'}
        showSeeMoreButton={true}
      />
    </>
  )
}
