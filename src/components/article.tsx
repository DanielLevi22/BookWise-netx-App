import React from 'react'
import { CardArticle } from './CardArticle'

export function Article() {
  return (
    <article className="w-[324px]">
      <div className="flex items-center justify-between">
        <span className="text-gray-100">Livros populares</span>
        <button className="text-purple-100">Ver todos</button>
      </div>
      <div className="mt-4 space-y-3">
        <CardArticle />
        <CardArticle />
        <CardArticle />
        <CardArticle />
      </div>
    </article>
  )
}
