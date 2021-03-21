import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const productHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const storeApi = process.env.STORE_BACK_END_API || `https://fakestoreapi.herokuapp.com/products/`

  const productResponse = await fetch(`${storeApi}/${id}`)
  const productResponseJson = await productResponse.json()

  res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')

  res.status(200).json(productResponseJson)
}

export default productHandler
