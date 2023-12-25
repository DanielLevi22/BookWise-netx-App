import { categoryBooks } from '@/@type/category-books'
import { api } from '@/app/lib/api'
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
export default async function Books() {
  const categoryBooks = await getCategoryBooks()
  if (categoryBooks) {
    categoryBooks.unshift({ id: 'asdadsad', name: 'Tudo' })
  }
  return (
    <main className="w-full overflow-hidden px-[96px] py-[72px]  ">
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
    </main>
  )
}
