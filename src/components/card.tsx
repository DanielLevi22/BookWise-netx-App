import { Star } from 'lucide-react'
import { Profile } from './profile'
import Image from 'next/image'
import { recentAvaliable } from '@/@type/recents-avaliables'

export async function Card({
  avatar_url,
  book_author,
  book_cover_url,
  book_name,
  book_summary,
  created_at,
  rating,
  username,
}: recentAvaliable) {
  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <div className=" flex items-start justify-between">
        <Profile />
        <div className="flex items-center gap-1">
          <Star className=" h-4 w-4 text-purple-200" />
          <Star className=" h-4 w-4 text-purple-200" />
          <Star className=" h-4 w-4 text-purple-200" />
          <Star className=" h-4 w-4 text-purple-200" />
          <Star className=" h-4 w-4 text-purple-200" />
        </div>
      </div>

      <div className="mt-8 flex gap-5">
        <div className="h-[108px] w-[152px]">
          <Image
            src={book_cover_url}
            alt=""
            height={108}
            width={152}
            className="h-full w-full"
            quality={100}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-100">{book_name}</span>
          <span className="text-gray-400">{book_author}</span>
          <span className="text-sm text-gray-300">{book_summary}</span>
        </div>
      </div>
    </div>
  )
}
