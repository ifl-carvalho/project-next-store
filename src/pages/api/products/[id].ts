import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const productHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const storeApi = process.env.STORE_PRODUCTS_API || `http://localhost:3333/products/`

  const productResponse = await fetch(`${storeApi}${id}`)
  const productResponseJson = await productResponse.json()

  res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')

  if (productResponse.ok) {
    res.status(200).json(productResponseJson)
  } else {
    res.status(404)
  }
}

export default productHandler
