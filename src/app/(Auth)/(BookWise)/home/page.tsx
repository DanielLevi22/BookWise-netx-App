import { recentAvaliable } from '@/@type/recents-avaliables'
import { api } from '@/app/lib/api'
import { Article } from '@/components/article'
import { Card } from '@/components/card'
import { LineChart } from 'lucide-react'

async function getRecentAvaliables(): Promise<recentAvaliable[]> {
  const response = await api('/recent-reviews', {
    cache: 'force-cache',
  })

  const data = await response.json()

  return data
}
export default async function Home() {
  const recent = await getRecentAvaliables()
  const recentOrdenate = recent.sort(
    (a, b) => +new Date(b.createdAt) - +new Date(a.createdAt),
  )

  return (
    <main>
      <div className=" w-full flex-1 p-[72px]">
        <div className="flex items-center gap-2 font-bold text-gray-100">
          <LineChart className="h-6 w-6 text-green-200 " />
          Início
        </div>

        <div className="mt-12 flex gap-[100px]">
          <div className="max-w-[608px]">
            <div className="">
              <span className="text-gray-100">Avaliações mais recentes</span>
              <div className="mt-4 space-y-3">
                {recentOrdenate?.map((item, index) => (
                  <Card
                    key={index.toString()}
                    userId={item.userId}
                    avatarUrl={item.avatarUrl}
                    bookAuthor={item.bookAuthor}
                    bookCoverUrl={item.bookCoverUrl}
                    bookName={item.bookName}
                    username={item.username}
                    rate={item.rate}
                    createdAt={item.createdAt}
                    bookSummary={item.bookSummary}
                  />
                ))}
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
