import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const categoryHandler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query

  const storeApi = process.env.STORE_CATEGORIES_API || `http://localhost:3333/products/`

  const categoryResponse = await fetch(`${storeApi}${id}`)
  const categoryResponseJson = await categoryResponse.json()

  res.setHeader('Cache-Control', 's-maxage=5, stale-while-revalidate')

  if (categoryResponse.ok) {
    res.status(200).json(categoryResponseJson)
  } else {
    res.status(404)
  }
}

export default categoryHandler
