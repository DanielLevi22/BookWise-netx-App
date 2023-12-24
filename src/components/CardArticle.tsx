import { clippingUrl } from '@/utils/clippingurl'
import { starInRating } from '@/utils/starinrating'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface CardArticleProps {
  cover_url: string
  name: string
  author: string
  rate: number
}

export function CardArticle({
  author,
  cover_url: coverUrl,
  name,
  rate,
}: CardArticleProps) {
  const totalRating = starInRating(rate)
  return (
    <div className="flex gap-5 rounded-lg bg-gray-700 px-5 py-[18px]">
      <Image src={clippingUrl(coverUrl)} alt="" width={64} height={94} />
      <div>
        <h1 className="text-gray-100">{name}</h1>
        <span className="mt-1 block text-gray-400">{author}</span>
        <div className="mt-5 flex items-center">
          {totalRating.map((item, index) => {
            if (item === true)
              return (
                <Star
                  className=" h-4 w-4 fill-purple-100 text-purple-100"
                  key={index}
                />
              )
            return <Star className=" h-4 w-4 text-purple-100" key={index} />
          })}
        </div>
      </div>
    </div>
  )
}
