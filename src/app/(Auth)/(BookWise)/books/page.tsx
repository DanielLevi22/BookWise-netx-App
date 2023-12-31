import { Book } from '@/@type/book'
import { categoryBooks } from '@/@type/category-books'
import { api } from '@/app/lib/api'
import { AvailableBook } from '@/components/availablebook'
import { Search } from '@/components/search'
import { Tags } from '@/components/settingstags'
import { Glasses } from 'lucide-react'
async function getCategoryBooks(): Promise<categoryBooks[]> {
  const response = await api('/books-category', {
    cache: 'no-cache',
  })

  const data = await response.json()

  return data
}
async function getSearchBooks(query: string): Promise<Book[]> {
  const response = await api(`/search-book?q=${query}`, {
    cache: 'no-cache',
  })
  const data = await response.json()
  return data
}

export default async function Books({
  searchParams,
}: {
  searchParams?: {
    q?: string
  }
}) {
  const categoryBooks = await getCategoryBooks()
  if (categoryBooks) {
    categoryBooks.unshift({ id: 'dsadqydv', name: 'Tudo' })
  }

  const query = searchParams?.q || ''
  const books = await getSearchBooks(query)

  return (
    <main className=" w-full flex-1  overflow-hidden p-[72px]">
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center gap-3">
          <Glasses className="h-8 w-8 text-green-100" />
          <h1 className="text-2xl font-bold text-gray-100">Explorar</h1>
        </div>
        <Search />
      </div>
      <div className="flex">
        <div className="overflow-hidden">
          <Tags category={categoryBooks} />
        </div>
      </div>
      <div className=" mt-12 grid auto-rows-[184px] grid-cols-3 gap-5">
        {books?.map((item) => (
          <AvailableBook
            key={item.id}
            author={item.author}
            cover_url={item.cover_url}
            name={item.name}
            rate={item.rate}
          />
        ))}
      </div>
    </main>
  )
}
