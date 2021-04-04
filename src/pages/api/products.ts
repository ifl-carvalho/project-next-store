import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const productsHandler: NextApiHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const storeApi = process.env.STORE_BACK_END_API || `http://localhost:3333`

  const productsResponse = await fetch(`${storeApi}/products/`)
  const productsResponseJson = await productsResponse.json()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  if (productsResponse.ok) {
    res.status(200).json(productsResponseJson)
  } else {
    res.status(404)
  }
}

export default productsHandler
