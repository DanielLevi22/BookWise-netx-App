import { clippingUrl } from '@/utils/clippingurl'
import { starInRating } from '@/utils/starinrating'
import { Star } from 'lucide-react'
import Image from 'next/image'

interface cardBookProps {
  cover_url: string
  name: string
  author: string
  rate: number
  cardVariant: 'primary' | 'secondary'
}

export function CardBook({
  author,
  cover_url: coverUrl,
  name,
  rate,
  cardVariant,
}: cardBookProps) {
  const totalRating = starInRating(rate)
  return (
    <div className="flex gap-5 rounded-lg bg-gray-700 ">
      <Image
        src={clippingUrl(coverUrl)}
        alt=""
        width={108}
        height={152}
        className={`${
          cardVariant === 'primary'
            ? ' max-h-24 w-16 '
            : 'max-h-[152px]  max-w-[108px]'
        } `}
      />
      <div className="flex flex-col">
        <h1 className="text-gray-100">{name}</h1>
        <span className="mt-1 block text-gray-400">{author}</span>
        <div className="mt-auto flex items-center">
          {totalRating.map((item, index) => {
            if (item === true)
              return (
                <Star
                  className="  h-4 w-4 fill-purple-100 text-purple-100"
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
