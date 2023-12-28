import { prisma } from '@/app/lib/prisma/prisma'
import { z } from 'zod'

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const urlid = params.id[0]
  const id = urlid.slice(1)

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
              summary: true, // Adicionamos o summary aqui
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

  const totalBooksRated = user?.ratings.length || 0

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
  const mostReadGenreName = sortedGenres.length > 0 ? sortedGenres[0][0] : ''

  // Calcula o total de páginas lidas
  const totalPagesRead =
    user?.ratings.reduce(
      (total, rating) => total + (rating.book.total_pages || 0),
      0,
    ) || 0

  // Obtém a lista de livros avaliados pelo usuário
  const ratedBooks = user?.ratings.map((rating) => rating.book) || []

  // Calcula o número total de autores únicos dos livros avaliados
  const totalAuthorsRead = new Set(ratedBooks.map((book) => book.author)).size

  // Retorna apenas as informações essenciais do usuário junto com a lista de livros avaliados
  const userResponse = {
    id: user?.id,
    name: user?.name,
    avatar_url: user?.avatar_url,
    created_at: user?.created_at,
    ratedBooks,
  }

  return Response.json({
    user: userResponse,
    totalBooksRated,
    totalAuthorsRead,
    mostReadGenre: mostReadGenreName,
    totalPagesRead,
  })
}
