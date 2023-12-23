import { LineChart } from 'lucide-react'
import Image from 'next/image'
import { Logout } from './logout'

export function Sidebar() {
  return (
    <aside className="ml-5 mt-5 flex h-screen w-[232px] flex-col items-center rounded-xl bg-gradient-to-t from-gray-800 to-purple-200">
      <Image
        src="/logo.svg"
        alt="logo"
        height={32}
        width={126}
        className="mt-10"
      />

      <div className="mt-16 flex items-center gap-3 text-gray-400">
        <LineChart className="h-6 w-6 text-gray-400 hover:text-gray-100" />
        Início
      </div>

      <div className="mt-4 flex items-center gap-3 text-gray-400">
        <LineChart className="h-6 w-6 text-gray-400 hover:text-gray-100" />
        Explorar
      </div>

      <Logout />
    </aside>
  )
}
