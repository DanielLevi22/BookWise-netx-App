import { Star } from 'lucide-react'
import { Profile } from './profile'
import Image from 'next/image'
import { recentAvaliable } from '@/@type/recents-avaliables'
import { clippingUrl } from '@/utils/clippingurl'
import { starInRating } from '@/utils/starinrating'
import { CardBook } from './cardbook'
import { compareDate } from '@/utils/compareDate'

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
  const date = compareDate(createdAt)
  return (
    <div>
      <span className="mb-1 block text-sm text-gray-300">{date}</span>
      <div className="rounded-lg bg-gray-700 p-6 text-left">
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
