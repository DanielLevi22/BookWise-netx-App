import { Glasses, Search } from 'lucide-react'

export default function Books() {
  return (
    <main className="w-full px-[96px] py-[72px] ">
      <div className="flex items-start justify-between">
        <div className="flex items-center justify-center gap-3">
          <Glasses className="h-8 w-8 text-green-100" />
          <h1 className="text-2xl font-bold text-gray-100">Explorar</h1>
        </div>

        <div className="group flex items-center justify-center gap-2 rounded-[4px] border border-gray-500 px-5 py-3 focus-within:border-green-200">
          <input
            type="text"
            placeholder="Buscar livro ou autor"
            className=" w-[365px] border-none bg-transparent text-gray-200 caret-green-100  outline-none placeholder:text-sm placeholder:text-gray-400"
          />
          <button>
            <Search className="h-5 w-5 text-gray-500 group-focus-within:text-green-200" />
          </button>
        </div>
      </div>

      <div className="flex">
        <div className="flex items-center justify-center rounded-3xl border border-purple-100 px-4 py-1 text-purple-100">
          Computação
        </div>
      </div>
    </main>
  )
}
