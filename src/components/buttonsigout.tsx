'use client'
import { LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export function ButtonSigOut() {
  return (
    <button onClick={() => signOut()}>
      <LogOut className="h-5 w-5 text-red-500" />
    </button>
  )
}
