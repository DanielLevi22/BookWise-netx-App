import { recentAvaliable } from '@/@type/recents-avaliables'
import { api } from '@/app/lib/api'
import { Article } from '@/components/article'
import { Card } from '@/components/card'
import { Sidebar } from '@/components/sidebar'
import { LineChart } from 'lucide-react'

async function getRecentAvaliables(): Promise<recentAvaliable[]> {
  const response = await api('/recent-reviews')

  const data = await response.json()

  return data
}
export default async function Home() {
  return (
    <main className="m-auto flex w-[1440px] ">
      <Sidebar />

      <div className="ml-[96px] mt-[72px]">
        <div className="flex items-center gap-2 font-bold text-gray-100">
          <LineChart className="h-6 w-6 text-green-200 " />
          Início
        </div>

        <div className="mt-12 flex gap-[100px]">
          <div className="max-w-[608px]">
            <div className="">
              <span className="text-gray-100">Sua última leitura</span>
              <div className="mt-4 space-y-3">
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
          <div>
            <Article />
          </div>
        </div>
      </div>
    </main>
  )
}
