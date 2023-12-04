import { Star } from 'lucide-react'
import Image from 'next/image'

export function CardArticle() {
  return (
    <div className="flex gap-5 rounded-lg bg-gray-700 px-5 py-[18px]">
      <Image
        src="/images/books/codigo-limpo.png"
        alt=""
        width={64}
        height={94}
      />
      <div>
        <h1 className="text-gray-100">Entendendo Algoritmos</h1>
        <span className="mt-1 block text-gray-400">Aditya Bhargava</span>
        <div className="mt-5 flex items-center">
          <Star className="h-3 w-3 text-purple-200" />
          <Star className="h-3 w-3 text-purple-200" />
          <Star className="h-3 w-3 text-purple-200" />
          <Star className="h-3 w-3 text-purple-200" />
          <Star className="h-3 w-3 text-purple-200" />
        </div>
      </div>
    </div>
  )
}
