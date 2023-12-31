'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, Bookmark, X } from 'lucide-react'
import { CardBook } from './cardbook'
import { AvailablesBooks } from '@/@type/availablebook'
import axios from 'axios'
import { useState } from 'react'
import { CardAvailable } from './cardAvailable'
import { CreateAvailable } from './createavailable'
import { useSession } from 'next-auth/react'
import { SignInModal } from './DialogSingnin'

interface availableBookProps {
  id: string
  author: string
  cover_url: string
  name: string
  rate: number
}
export function AvailableBook({
  id,
  author,
  cover_url: coverUrl,
  name,
  rate,
}: availableBookProps) {
  const [available, setAvailable] = useState<AvailablesBooks>()
  const [isOpen, setIsOpen] = useState(false)
  const { data: session, status } = useSession()

  async function handleSearchAvaliableBook(id: string) {
    const response = await axios.get(
      `http://localhost:3000/api/available-books/${id}`,
    )
    setAvailable(response.data)
  }
  console.log(status)

  function openCreatedForm() {
    if (status === 'authenticated') {
      setIsOpen(!isOpen)
    }
  }
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button onClick={() => handleSearchAvaliableBook(id)}>
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
        <Dialog.Overlay className="fixed inset-y-0 right-0 h-screen w-[660px] bg-black/75" />

        <Dialog.Content className="fixed bottom-0 right-0 top-5 h-screen min-w-[564px] -translate-x-8 overflow-y-auto pb-10 pr-2 scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-gray-600">
          <div className="relative  h-6">
            <div className="absolute -top-1 right-0">
              <Dialog.Close>
                <X className="h-6 w-6 text-gray-400" />
              </Dialog.Close>
            </div>
          </div>

          {available && (
            <div className=" rounded-[10px] bg-gray-700 px-8 pb-4 pt-6">
              <CardBook
                cardVariant="secondary"
                author={available.bookAuthor}
                cover_url={available.bookCoverUrl}
                name={available.bookName}
                rate={Number(available.mediaDasAvaliacoes)}
              />

              <div className="mt-10 h-px w-full bg-gray-600" />

              <div className="flex items-center justify-between py-6">
                <div className="flex items-center gap-4 ">
                  <Bookmark className="h-6 w-6 text-green-100" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-gray-300">Categoria</span>
                    <span className="text-base font-bold text-gray-200 ">
                      {available.categories.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 ">
                  <BookOpen className="h-6 w-6 text-green-100" />
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-gray-300">Páginas</span>
                    <span className="text-base font-bold text-gray-200 ">
                      {available.totalPages}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="mb-5 mt-9 flex items-center justify-between">
            <span className="text-sm text-gray-300 ">Avaliações</span>
            {status === 'unauthenticated' && (
              <SignInModal ButtonName="Avaliar" />
            )}
            {status === 'authenticated' && (
              <button
                onClick={openCreatedForm}
                className="text-base font-bold text-purple-100"
              >
                {isOpen === false ? 'Avaliar' : 'Cancelar Avaliação'}
              </button>
            )}
          </div>
          {status === 'authenticated' && isOpen && <CreateAvailable />}
          {available?.ratings.map((item) => (
            <CardAvailable
              key={item.userId}
              comment={item.description}
              createdAt={item.createdAt}
              imgUrl={item.avatarUrl}
              rate={item.rate}
              username={item.username}
            />
          ))}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
