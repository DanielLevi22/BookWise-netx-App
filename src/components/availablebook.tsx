'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { CardBook } from './cardbook'

interface availableBookProps {
  author: string
  cover_url: string
  name: string
  rate: number
}
export function AvailableBook({
  author,
  cover_url: coverUrl,
  name,
  rate,
}: availableBookProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button>
          <div className="rounded-lg bg-gray-700 px-5 py-4">
            <CardBook
              cardVariant="secondary"
              author={author}
              cover_url={coverUrl}
              name={name}
              rate={rate}
            />
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 h-screen w-screen bg-black/75" />

        <Dialog.Content className="fixed  left-1/2 top-1/2 min-w-[32rem] -translate-x-2/4	-translate-y-2/4  rounded-xl bg-gray-700 px-[72px] py-14 ">
          <div className="relative">
            <div className="absolute -right-12 -top-10">
              <Dialog.Close>
                <X className="h-6 w-6 text-gray-400" />
              </Dialog.Close>
            </div>
          </div>
          <Dialog.Title className=" text-center text-base font-bold text-gray-200 ">
            Faça login para deixar sua avaliação
          </Dialog.Title>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
