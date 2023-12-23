// /api/book?bookId=48b86ac2-014e-401d-bcbb-331ce5f4a457

import { prisma } from '@/app/lib/prisma/prisma'
import { NextRequest } from 'next/server'

export default async function handler(req: NextRequest) {
  // const bookId = String(req.headers.bookId)
  // const book = await prisma.book.findUnique({
  //   where: {
  //     id: bookId,
  //   },
  // })
  // return res.json({ book })
}
