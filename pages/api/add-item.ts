import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: 'secret_XQDRRLJyDc00qLbISPQ1VKrSujviXJz0kq5MyaRiQbX',
})

const databaseId = '833ed76bb9cb44b58474dc017dc3efc0'

type Data = {
  message: string
}

async function addItem(name: string) {
  try {
    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        title: [
          {
            text: {
              content: name,
            },
          },
        ],
      },
    })
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // add items
  const { name } = req.query

  if (name == null) {
    return res.status(400).json({ message: 'No name' })
  }

  try {
    await addItem(String(name))
    res.status(200).json({ message: `Success ${name} added` })
  } catch (error) {
    res.status(400).json({ message: `Failed ${name} added` })
  }

  // sucess jacket add

  // Notion database connection (연결 추가)
}
