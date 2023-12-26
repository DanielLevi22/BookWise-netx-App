import { prisma } from '@/app/lib/prisma/prisma'

export async function GET() {
  const booksCategory = await prisma.category.findMany()
  return Response.json(booksCategory)
}
