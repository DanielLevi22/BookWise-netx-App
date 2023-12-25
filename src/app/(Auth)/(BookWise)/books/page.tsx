import { Search } from '@/components/search'
import { Tags } from '@/components/settingstags'
import { Glasses } from 'lucide-react'

export default function Books() {
  return (
    <main className="w-full px-[96px] py-[72px] ">
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center gap-3">
          <Glasses className="h-8 w-8 text-green-100" />
          <h1 className="text-2xl font-bold text-gray-100">Explorar</h1>
        </div>
        <Search />
      </div>
      <div className="flex">
        <div>
          <Tags />
        </div>
      </div>
    </main>
  )
}
