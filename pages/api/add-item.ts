import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // add items
  const { name } = req.query
  res.status(200).json({ message: `Success ${name} added` })
  // sucess jacket add
}
