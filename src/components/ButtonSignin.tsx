'use client'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface ButtonsSigninProps {
  variant: 'google' | 'github' | 'visitante'
}

export function ButtonsSignin({ variant }: ButtonsSigninProps) {
  const router = useRouter()

  function handleSignin() {
    router.push('/home')
  }
  return (
    <div>
      {variant === 'google' && (
        <>
          <button
            onClick={() => signIn('google')}
            className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6  py-5 text-gray-200"
          >
            <Image src="/google.svg" alt="icongoogle" width={32} height={32} />
            Entrar com Google
          </button>
        </>
      )}
      {variant === 'github' && (
        <>
          <button
            onClick={() => signIn('github')}
            className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6  py-5 text-gray-200"
          >
            <Image src="/git.svg" alt="icongoogle" width={32} height={32} />
            Entrar com GitHub
          </button>
        </>
      )}
      {variant === 'visitante' && (
        <>
          <button
            onClick={handleSignin}
            className="flex w-full items-center gap-5 rounded-lg bg-gray-600 px-6  py-5 text-gray-200"
          >
            <Image src="/foguete.svg" alt="icongoogle" width={32} height={32} />
            Acessar como visitante
          </button>
        </>
      )}
    </div>
  )
}
