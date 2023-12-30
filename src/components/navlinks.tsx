'use client'
import { clsx } from 'clsx'
import { Glasses, LineChart, User } from 'lucide-react'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { name: 'Home', href: '/home', icon: LineChart },
  { name: 'books', href: '/books', icon: Glasses },
]

interface linkProps {
  name: string
  href: string
  icon: React.ElementType
}
export function NavLink() {
  const [url, setUrl] = useState<linkProps[]>(links)

  async function getUseSession() {
    const session = await getSession()
    if (session?.user.id) {
      setUrl([
        ...url,
        { name: 'profile', href: `/profile/${session?.user.id}`, icon: User },
      ])
    }
  }
  const pathname = usePathname()
  useEffect(() => {
    getUseSession()
  }, [])

  return (
    <>
      {url.map((link) => {
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
