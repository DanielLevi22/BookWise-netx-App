import { prisma } from '@/app/lib/prisma/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const query = z.string().parse(searchParams.get('q'))

  console.log('Cheguei', query)
  let books = []

  if (query.toLocaleLowerCase() === 'tudo') {
    // Buscar todos os livros com média das avaliações
    books = await prisma.book.findMany({
      include: {
        ratings: {
          select: {
            rate: true,
          },
        },
      },
    })

    // Calcular a média das avaliações para cada livro
    books = books.map((book) => ({
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at,
      rate: calculateAverageRating(book.ratings),
    }))
  } else {
    // Buscar livros com base na consulta e incluir média das avaliações

    // ...

    const categories = await prisma.category.findMany()
    const isCategory = categories.some(
      (item) => item.name.toLowerCase() === query.toLocaleLowerCase(),
    )

    if (isCategory) {
      // Se a consulta corresponder a uma categoria, buscar livros por categoria
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
        include: {
          ratings: {
            select: {
              rate: true,
            },
          },
        },
      })
    } else {
      // Se a consulta não for uma categoria, buscar livros por nome ou autor
      books = await prisma.book.findMany({
        where: {
          OR: [
            { name: { contains: query, mode: 'insensitive' } },
            { author: { contains: query, mode: 'insensitive' } },
          ],
        },
        include: {
          ratings: {
            select: {
              rate: true,
            },
          },
        },
      })
    }

    // Calcular a média das avaliações para cada livro
    books = books.map((book) => ({
      id: book.id,
      name: book.name,
      author: book.author,
      summary: book.summary,
      cover_url: book.cover_url,
      total_pages: book.total_pages,
      created_at: book.created_at,
      rate: calculateAverageRating(book.ratings),
    }))
  }

  return Response.json(books)
}

// Função auxiliar para calcular a média das avaliações
function calculateAverageRating(ratings) {
  if (!ratings || ratings.length === 0) {
    return null
  }

  const sum = ratings.reduce((total, rating) => total + rating.rate, 0)
  const average = sum / ratings.length

  // Arredonda para o inteiro mais próximo
  return Math.round(average)
}
