import { prisma } from '@/app/lib/prisma/prisma'

export async function GET() {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const booksCategory = await prisma.category.findMany()
  return Response.json(booksCategory)
}
