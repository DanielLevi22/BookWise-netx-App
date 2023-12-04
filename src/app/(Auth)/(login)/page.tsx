import { ButtonsSignin } from '@/components/ButtonSignin'
import Image from 'next/image'

export default function Login() {
  return (
    <main className="flex h-screen bg-gray-800">
      <div className="w-[644px] bg-gradient-login bg-cover bg-center bg-no-repeat"></div>
      <div className="flex flex-1 items-center justify-center">
        <div className="w-[372px]">
          <h1 className="text-2xl font-medium text-gray-100">Boas vindas!</h1>
          <p className="text-gray-200">
            Faça seu login ou acesse como visitante.
          </p>

          <div className="mt-10 space-y-4">
            <ButtonsSignin variant="google" />
            <ButtonsSignin variant="github" />
            <ButtonsSignin variant="visitante" />
          </div>
        </div>
      </div>
    </main>
  )
}
