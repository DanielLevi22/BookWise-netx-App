import { Star } from 'lucide-react'
import { Avatar } from './avatar'
import { starInRating } from '@/utils/starinrating'
import { compareDate } from '@/utils/compareDate'

interface cardAvailableProps {
  imgUrl: string
  username: string
  createdAt: string
  rate: number
  comment: string
}
export function CardAvailable({
  comment,
  createdAt,
  imgUrl,
  rate,
  username,
}: cardAvailableProps) {
  const totalRating = starInRating(rate)
  const date = compareDate(createdAt)
  return (
    <div className="rounded-lg bg-gray-700 p-6">
      <div className="flex items-center justify-between ">
        <div className="flex items-start gap-4">
          <Avatar url={imgUrl} />
          <div className="flex flex-col">
            <span className="text-base font-bold text-gray-100">
              {username}
            </span>
            <span className="text-sm text-gray-300 ">{date}</span>
          </div>
        </div>
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

      <p className="max-w-[516px] pt-5 text-sm text-gray-300">{comment}</p>
    </div>
  )
}
