import { prisma } from '@/app/lib/prisma/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = z.string().parse(params.id)

  const livro = await prisma.book.findUnique({
    where: {
      id,
    },
    include: {
      categories: true,
      ratings: {
        include: {
          user: true,
        },
      },
    },
  })

  if (!livro) {
    return Response.json({ error: 'Livro não encontrado' })
  }

  // Obtendo os nomes das categorias
  const categoriasDoLivro = await Promise.all(
    livro.categories.map(async (category) => {
      const categoria = await prisma.category.findUnique({
        where: {
          id: category.categoryId,
        },
      })
      return categoria ? categoria.name : 'Categoria não encontrada'
    }),
  )

  // Calculando a média das avaliações
  const avaliacoes = livro.ratings.map((rating) => rating.rate)
  const mediaDasAvaliacoes =
    avaliacoes.length > 0
      ? avaliacoes.reduce((acc, val) => acc + val, 0) / avaliacoes.length
      : 0

  const livroInfo = {
    bookId: livro.id,
    bookName: livro.name,
    bookAuthor: livro.author,
    bookSummary: livro.summary,
    bookCoverUrl: livro.cover_url,
    totalPages: livro.total_pages,
    createdAt: livro.created_at,
    categories: categoriasDoLivro,
    ratings: livro.ratings.map((rating) => ({
      userId: rating.user.id,
      username: rating.user.name,
      rate: rating.rate,
      avatarUrl: rating.user.avatar_url,
      createdAt: rating.created_at,
      description: rating.description,
    })),
    mediaDasAvaliacoes: mediaDasAvaliacoes.toFixed(2), // Limitando para duas casas decimais
  }

  return Response.json(livroInfo)
}
