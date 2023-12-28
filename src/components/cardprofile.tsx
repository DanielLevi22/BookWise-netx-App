import { Star } from 'lucide-react'
import { Profile } from './profile'
import Image from 'next/image'
import { recentAvaliable } from '@/@type/recents-avaliables'
import { clippingUrl } from '@/utils/clippingurl'
import { starInRating } from '@/utils/starinrating'
import { CardBook } from './cardbook'

interface cardProfile {
  createdAt: string
  coverUrl: string
  name: string
  author: string
  rate: number
  summary: string
}

export async function CardProfile({
  author,
  coverUrl,
  createdAt,
  name,
  rate,
  summary,
}: cardProfile) {
  return (
    <div>
      <span className="text-sm text-gray-300">{createdAt}</span>
      <div className="rounded-lg bg-gray-700 p-6 text-left ">
        <CardBook
          author={author}
          cardVariant="secondary"
          cover_url={coverUrl}
          name={name}
          rate={rate}
        />
        <div className="mt-6 text-gray-300">{summary}</div>
      </div>
    </div>
  )
}
