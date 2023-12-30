interface filteredBooks {
  id: string
  name: string
  author: string
  summary: string // Adicionado o campo summary
  cover_url: string
  total_pages: number
  created_at: string
  categories: {
    category: {
      name: string
    }
  }[]
}

interface User {
  id: string
  name: string
  avatar_url: string
  created_at: string
  ratings: {
    id: string
    rate: number
    description: string
    created_at: string
    book: filteredBooks
  }[]
}

export interface searchProfile {
  user: {
    id: string
    name: string
    avatar_url: string
    created_at: string
    ratedBooks: filteredBooks[]
  }
  totalBooksRated: number
  totalAuthorsRead: number
  mostReadGenre: string
  totalPagesRead: number
}
