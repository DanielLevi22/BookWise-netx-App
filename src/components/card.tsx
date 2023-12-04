import { Star } from 'lucide-react'
import { Profile } from './profile'
import Image from 'next/image'

export function Card() {
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
            src="/images/books/entendendo-algoritmos.png"
            alt=""
            height={108}
            width={152}
            className="h-full w-full"
            quality={100}
          />
        </div>
        <div className="flex flex-col">
          <span className="text-gray-100">Hobbit</span>
          <span className="text-gray-400">J.R.R. Tolkien</span>
          <span className="text-sm text-gray-300">
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
          </span>
        </div>
      </div>
    </div>
  )
}
