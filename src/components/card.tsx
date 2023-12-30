import { Star } from 'lucide-react'
import { Profile } from './profile'
import Image from 'next/image'
import { recentAvaliable } from '@/@type/recents-avaliables'
import { clippingUrl } from '@/utils/clippingurl'
import { starInRating } from '@/utils/starinrating'
import Link from 'next/link'
export async function Card({
  avatarUrl,
  bookAuthor,
  bookCoverUrl,
  bookName,
  bookSummary,
  createdAt,
  rate,
  username,
  userId,
}: recentAvaliable) {
  const totalRating = starInRating(rate)
  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <div className=" flex items-start justify-between">
        <Link href={`/profile/${userId}`}>
          <Profile
            avatarUrl={avatarUrl}
            createdAt={createdAt}
            username={username}
          />
        </Link>
        <div className="flex items-center gap-1">
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

      <div className="relative mt-8 flex gap-5">
        <div className="shrink-0">
          <Image
            src={clippingUrl(bookCoverUrl)}
            alt=""
            height={152}
            width={108}
            className="h-[152px] w-[108px] "
            quality={100}
          />
        </div>
        <div className=" flex flex-col ">
          <span className="text-base text-gray-100">{bookName}</span>
          <span className="text-sm text-gray-400">{bookAuthor}</span>
          <span className="mt-5 line-clamp-4 text-sm text-gray-300 ">
            {bookSummary}
          </span>
        </div>
      </div>
    </div>
  )
}
