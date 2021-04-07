import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'

const categoriesHandler: NextApiHandler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const storeApi = process.env.STORE_CATEGORIES_API || `http://localhost:3333/categories/`

  const categoriesResponse = await fetch(`${storeApi}`)
  const categoriesResponseJson = await categoriesResponse.json()

  res.setHeader('Cache-Control', 's-maxage=10, stale-while-revalidate')

  if (categoriesResponse.ok) {
    res.status(200).json(categoriesResponseJson)
  } else {
    res.status(404)
  }
}

export default categoriesHandler
