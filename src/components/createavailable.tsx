'use client'
import { Check, Star, X } from 'lucide-react'
import { Avatar } from './avatar'
import { starInRating } from '@/utils/starinrating'
import { useState } from 'react'

export function CreateAvailable() {
  const [initalAvailable, setInitalAvailable] = useState(0)
  const totalRating = starInRating(initalAvailable)
  function handleRating(rating: number) {
    setInitalAvailable(rating)
  }
  return (
    <div className="mb-3 rounded-lg bg-gray-700 p-6">
      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-4
        "
        >
          <Avatar url="https:github.com/daniellevi22.png" />
          <span className="text-base font-bold text-gray-100">Daniel Levi</span>
        </div>
        <div className="flex items-center gap-1 ">
          {totalRating.map((item, index) => {
            if (item === true)
              return (
                <button key={index} onClick={() => handleRating(index + 1)}>
                  <Star className="  h-7 w-7  fill-purple-100 text-purple-100" />
                </button>
              )
            return (
              <button key={index} onClick={() => handleRating(index + 1)}>
                {' '}
                <Star className="h-7 w-7 text-purple-100" />
              </button>
            )
          })}
        </div>
      </div>

      <textarea
        placeholder="Escreva sua avaliação"
        className="mt-6 min-h-[164px] w-full rounded border border-gray-500 bg-gray-800 px-5 py-3 text-gray-200 caret-green-100 placeholder:text-sm placeholder:text-gray-400 focus:border-green-200 focus:outline-none "
      />
      <div className="flex items-center justify-end gap-2 pt-3">
        <button className="rounded bg-gray-600 p-2 ">
          <X className="h-6 w-6 text-purple-100" />
        </button>
        <button className="rounded bg-gray-600 p-2 ">
          <Check className="h-6 w-6 text-green-100" />
        </button>
      </div>
    </div>
  )
}
