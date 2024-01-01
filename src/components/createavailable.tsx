'use client'
import { Check, Star, X } from 'lucide-react'
import { Avatar } from './avatar'
import { starInRating } from '@/utils/starinrating'
import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
const FormSchema = z.object({
  description: z.string().nonempty({
    message: 'O campo não pode estar vazio. Deixe o seu comentário.',
  }),
})

type schemaForm = z.infer<typeof FormSchema>

interface createAvailable {
  userId: string
  bookId: string
  username: string
  onOpenModal: (isOpen: boolean) => void
}

export function CreateAvailable({
  bookId,
  userId,
  username,
  onOpenModal,
}: createAvailable) {
  const [initalAvailable, setInitalAvailable] = useState(0)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm<schemaForm>({
    resolver: zodResolver(FormSchema),
  })

  const totalRating = starInRating(initalAvailable)
  function handleRating(rating: number) {
    setInitalAvailable(rating)
  }

  async function handleCreateAvailable(describe: schemaForm) {
    if (initalAvailable > 0 && userId && bookId) {
      try {
        const response = await axios.post(
          'http://localhost:3000/api/create-available',
          {
            userId,
            bookId,
            rate: initalAvailable.toString(),
            description: describe.description,
          },
        )
      } catch (error) {
        console.error('Erro ao criar disponibilidade:', error)
      }

      onOpenModal(false)
    }
  }
  return (
    <form onSubmit={handleSubmit(handleCreateAvailable)}>
      <div className="mb-3 rounded-lg bg-gray-700 p-6">
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-4
        "
          >
            <Avatar url="https:github.com/daniellevi22.png" />
            <span className="text-base font-bold text-gray-100">
              {username}
            </span>
          </div>
          <div className="flex items-center gap-1 ">
            {totalRating.map((item, index) => {
              if (item === true)
                return (
                  <button
                    type="button"
                    key={index}
                    onClick={() => handleRating(index + 1)}
                  >
                    <Star className="  h-7 w-7  fill-purple-100 text-purple-100" />
                  </button>
                )
              return (
                <button
                  type="button"
                  key={index}
                  onClick={() => handleRating(index + 1)}
                >
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
          {...register('description')}
        />
        <span className="  text-sm text-red-200">
          {errors.description?.message}
        </span>

        <div className="flex items-center justify-end gap-2 pt-3">
          <button className="rounded bg-gray-600 p-2 ">
            <X className="h-6 w-6 text-purple-100" />
          </button>
          <button
            className="rounded bg-gray-600 p-2 "
            type="submit"
            disabled={isSubmitting}
          >
            <Check className="h-6 w-6 text-green-100" />
          </button>
        </div>
      </div>
    </form>
  )
}
