import { prisma } from '@/app/lib/prisma/prisma'

export async function GET() {
  // await new Promise((resolve) => setTimeout(resolve, 3000))

  const recentReviews = await prisma.rating.findMany()

  const recentReviewsInfo = []

  if (recentReviews) {
    for (const review of recentReviews) {
      const user = await prisma.user.findUnique({
        where: {
          id: review.user_id,
        },
        select: {
          name: true,
          avatar_url: true,
        },
      })

      const book = await prisma.book.findUnique({
        where: {
          id: review.book_id,
        },
        select: {
          name: true,
          cover_url: true,
          author: true,
          summary: true,
        },
      })

      recentReviewsInfo.push({
        username: user?.name,
        rate: review.rate,
        avatarUrl: user?.avatar_url,
        bookName: book?.name,
        bookAuthor: book?.author,
        bookSummary: book?.summary,
        bookCoverUrl: book?.cover_url,
        createdAt: review.created_at,
      })
    }
  }

  return Response.json(recentReviewsInfo)
}
