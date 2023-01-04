import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_XQDRRLJyDc00qLbISPQ1VKrSujviXJz0kq5MyaRiQbX',
})

const databaseId = '833ed76bb9cb44b58474dc017dc3efc0'

async function getDetail() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
      sorts: [
        {
          property: 'prices',
          direction: 'ascending',
        },
      ],
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // get items

  try {
    const response = await getDetail()
    res.status(200).json({ items: response?.results, message: 'Success' })
  } catch (error) {
    res.status(400).json({ message: 'Failed' })
  }

  // success jacket add

  // Notion database connection (연결 추가)
}
