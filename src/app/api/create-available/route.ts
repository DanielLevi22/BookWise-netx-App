// pages/api/avaliacao.js

import { prisma } from '@/app/lib/prisma/prisma'
import { NextRequest } from 'next/server'
import { z } from 'zod'

const formSchema = z.object({
  userId: z.string(),
  bookId: z.string(),
  rate: z.string(),
  description: z.string(),
})

export async function POST(request: NextRequest) {
  if (request.method !== 'POST') {
    return Response.json({ message: 'Only POST requests allowed' })
  }

  try {
    const body = await request.json()
    const { userId, bookId, rate, description } = formSchema.parse(body)

    // Verifica se o usuário e o livro existem
    const [user, book] = await Promise.all([
      prisma.user.findUnique({ where: { id: userId } }),
      prisma.book.findUnique({ where: { id: bookId } }),
    ])

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    if (!book) {
      throw new Error('Livro não encontrado')
    }

    // Cria a avaliação
    const newRating = await prisma.rating.create({
      data: {
        rate: Number(rate),
        description,
        book: { connect: { id: bookId } },
        user: { connect: { id: userId } },
      },
    })

    return Response.json(newRating)
  } catch (error) {
    console.error('Erro ao processar a solicitação:', error)
    return Response.json('Erro interno do servidor')
  }
}
