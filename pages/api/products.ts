import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const productsHandler: NextApiHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const storeApi = process.env.STORE_BACK_END_API || `https://fakestoreapi.herokuapp.com/products/`

  const productsResponse = await fetch(`${storeApi}`)
  const productsResponseJson = await productsResponse.json()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  res.status(200).json(productsResponseJson)
}

export default productsHandler
