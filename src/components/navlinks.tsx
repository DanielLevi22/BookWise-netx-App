'use client'
import { clsx } from 'clsx'
import { Glasses, LineChart, User } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', href: '/home', icon: LineChart },
  {
    name: 'books',
    href: '/books',
    icon: Glasses,
  },
  { name: 'profile', href: '/profile', icon: User },
]
export function NavLink() {
  const pathname = usePathname()

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx({
              ' text-gray-400': pathname !== link.href,
              ' text-gray-100': pathname === link.href,
            })}
          >
            {pathname === link.href ? (
              <div className="mb-3 flex gap-3 py-2">
                <span className="h-6 w-1 rounded-md bg-gradient-horizontal" />
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </div>
            ) : (
              <div className="mb-3 flex gap-3 py-2">
                <span className="h-6 w-1 rounded-md " />
                <LinkIcon className="w-6" />
                <p className="hidden md:block">{link.name}</p>
              </div>
            )}
          </Link>
        )
      })}
    </>
  )
}
