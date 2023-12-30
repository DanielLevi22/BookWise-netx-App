import { prisma } from '@/app/lib/prisma/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = z.string().parse(params.id)
  const req = request.nextUrl.searchParams

  const query = req.get('q')

  if (!id) {
    throw new Error('Invalid or missing user id')
  }

  // Declaração e inicialização das variáveis
  let totalBooksRated = 0
  let mostReadGenreName = ''
  let totalPagesRead = 0
  let totalAuthorsRead = 0

  const user = await prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      id: true,
      name: true,
      avatar_url: true,
      created_at: true,
      ratings: {
        include: {
          book: {
            select: {
              id: true,
              name: true,
              author: true,
              cover_url: true,
              total_pages: true,
              created_at: true,
              summary: true,
              categories: {
                select: {
                  category: {
                    select: {
                      name: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  })

  // Obtém a lista de livros avaliados pelo usuário
  const ratedBooks = user?.ratings.map((rating) => rating.book) || []

  // Filtra os livros avaliados pelo usuário de acordo com a pesquisa
  const filteredBooks = query
    ? ratedBooks.filter(
        (book) =>
          book.name.toLowerCase().includes(query.toLowerCase().trim()) ||
          book.author.toLowerCase().includes(query.toLowerCase().trim()),
      )
    : ratedBooks

  // Calcula o total de livros avaliados
  totalBooksRated = ratedBooks.length

  // Calcula o tipo de gênero mais lido
  const genresRead =
    user?.ratings.flatMap((rating) =>
      rating.book.categories.map((category) => category.category.name),
    ) || []

  const mostReadGenre = genresRead.reduce((acc, genre) => {
    acc[genre] = (acc[genre] || 0) + 1
    return acc
  }, {})

  const sortedGenres = Object.entries(mostReadGenre).sort((a, b) => b[1] - a[1])
  mostReadGenreName = sortedGenres.length > 0 ? sortedGenres[0][0] : ''

  // Calcula o total de páginas lidas
  totalPagesRead =
    user?.ratings.reduce(
      (total, rating) => total + (rating.book.total_pages || 0),
      0,
    ) || 0

  // Calcula o número total de autores únicos dos livros avaliados
  totalAuthorsRead = new Set(ratedBooks.map((book) => book.author)).size

  // Declaração da variável userResponse
  const userResponse = {
    id: user?.id,
    name: user?.name,
    avatar_url: user?.avatar_url,
    created_at: user?.created_at,
    ratedBooks: filteredBooks,
  }

  return Response.json({
    user: userResponse,
    totalBooksRated,
    totalAuthorsRead,
    mostReadGenre: mostReadGenreName,
    totalPagesRead,
    filteredBooks,
  })
}
