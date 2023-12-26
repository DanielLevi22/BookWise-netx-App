import { prisma } from '@/app/lib/prisma/prisma'

export async function GET() {
  const booksPopular = await prisma.$queryRaw`
  SELECT b.*, r.rate, AVG(r.rate) as media
  FROM books b
  JOIN ratings r ON b.id = r.book_id
  GROUP BY b.id, r.rate
  ORDER BY media DESC
  LIMIT 10

`

  return Response.json(booksPopular)
}
