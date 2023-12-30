'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { LogOut, X } from 'lucide-react'
import { ButtonsSignin } from './ButtonSignin'

export function SignInModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="flex items-center gap-3">
          Fazer login
          <LogOut className="h-5 w-5 text-green-100" />
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
          <div className="mt-10 space-y-4">
            <ButtonsSignin variant="google" />
            <ButtonsSignin variant="github" />
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
