import Image from 'next/image'
import { Logout } from './logout'
import { NavLink } from './navlinks'

export function Sidebar() {
  return (
    <aside className=" mt-5 flex h-[98vh] w-[232px] flex-col items-center rounded-xl bg-gradient-to-t from-gray-800 to-purple-200">
      <Image
        src="/logo.svg"
        alt="logo"
        height={32}
        width={126}
        className="mt-10"
      />
      <div className="mt-16 space-y-4">
        <NavLink />
      </div>
      <Logout />
    </aside>
  )
}
