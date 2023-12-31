interface Rating {
  userId: string
  username: string
  rate: number
  avatarUrl: string
  createdAt: string
  description: string
}

export interface AvailablesBooks {
  bookId: string
  bookName: string
  bookAuthor: string
  bookSummary: string
  bookCoverUrl: string
  totalPages: number
  createdAt: string
  categories: string[]
  ratings: Rating[]
  mediaDasAvaliacoes: string
}
