import { prisma } from '@/app/lib/prisma/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } },
) {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  let books = []
  if (query === 'Tudo') {
    books = await prisma.book.findMany()
  }

  const categories = await prisma.category.findMany()
  console.log(categories)
  if (categories.some((item) => item.name === query)) {
    books = await prisma.book.findMany({
      where: {
        categories: {
          some: {
            category: {
              name: query,
            },
          },
        },
      },
    })
  }

  // Caso a query não corresponda a "Tudo" ou uma categoria existente
  return Response.json(books)
}
