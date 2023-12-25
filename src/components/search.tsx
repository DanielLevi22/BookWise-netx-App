'use client'
import { Search as SearchIcon } from 'lucide-react'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

import { useDebouncedCallback } from 'use-debounce'

export function Search() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()
  const handleSearch = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams)
    if (term) {
      params.set('q', term)
    } else {
      params.delete('q')
    }
    replace(`${pathname}?${params.toString()}`)
  }, 300)
  return (
    <div className="group flex items-center justify-center gap-2 rounded-[4px] border border-gray-500 px-5 py-3 focus-within:border-green-200">
      <input
        type="text"
        placeholder="Buscar livro ou autor"
        className=" w-[365px] border-none bg-transparent text-gray-200 caret-green-100  outline-none placeholder:text-sm placeholder:text-gray-400"
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
      />
      <button>
        <SearchIcon className="h-5 w-5 text-gray-500 group-focus-within:text-green-200" />
      </button>
    </div>
  )
}
