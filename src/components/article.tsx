import React from 'react'
import { CardBook } from './cardbook'
import { Book } from '@/@type/book'
import { api } from '@/app/lib/api'
async function getBooksPopular(): Promise<Book[]> {
  const response = await api('/books-Popular', {
    cache: 'no-cache',
  })

  const data = await response.json()

  return data
}
export async function Article() {
  const books = await getBooksPopular()
  const thefourmostpopularbooks = books.slice(0, 4)

  return (
    <article className="w-[324px]">
      <div className="flex items-center justify-between">
        <span className="text-gray-100">Livros populares</span>
        <button className="text-purple-100">Ver todos</button>
      </div>
      <div className="mt-4 space-y-3">
        {thefourmostpopularbooks.map((item) => {
          return (
            <div
              key={String(item.id)}
              className="rounded-lg bg-gray-700 px-5 py-4"
            >
              <CardBook
                cardVariant="primary"
                author={item.author}
                cover_url={item.cover_url}
                name={item.name}
                rate={item.rate}
              />
            </div>
          )
        })}
      </div>
    </article>
  )
}
