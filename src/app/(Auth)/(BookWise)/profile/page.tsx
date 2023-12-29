import { recentAvaliable } from '@/@type/recents-avaliables'
import { api } from '@/app/lib/api'
import { CardProfile } from '@/components/cardprofile'
import { BookA, BookOpen, Bookmark, LibraryBig, User } from 'lucide-react'
import { getServerSession } from 'next-auth'
import { buildNextAuthOptions } from '@/app/api/auth/[...nextauth]/options'
import { searchProfile } from '@/@type/searchprofile'
import { Avatar } from '@/components/avatar'
import { Search } from '@/components/search'

async function getProfile(id: string, q?: string): Promise<searchProfile> {
  const isQuery = q ? '?q=' + q.toLowerCase() : ''
  const url = `/profile/?id=${id}${isQuery}`

  const response = await api(url, {
    cache: 'no-cache',
  })

  const data = await response.json()

  return data
}
const authOptions = buildNextAuthOptions()
interface profileProps {
  searchParams: {
    id: string
    q: string
  }
}
export default async function Profile({ searchParams }: profileProps) {
  const session = await getServerSession(authOptions)
  let profile
  if (session?.user.id) {
    profile = await getProfile(session?.user.id)
  } else if (searchParams.id && searchParams.q) {
    profile = await getProfile(searchParams.id, searchParams.q)
  } else {
    profile = await getProfile(searchParams.id)
  }

  const userDataProfile = profile?.user.ratedBooks.map((item) => {
    return {
      id: item.id,
      name: item.name,
      author: item.author,
      summary: item.summary,
      coverUrl: item.cover_url,
      createdAt: item.created_at,
    }
  })
  return (
    <main>
      <div className=" w-full flex-1 p-[72px]">
        <div className="flex items-center gap-2 font-bold text-gray-100">
          <User className="h-6 w-6 text-green-200 " />
          Perfil
        </div>

        <div className="mt-12 flex gap-[100px]">
          <div className="max-w-[608px]">
            <div className="">
              <div className="mb-6">
                <Search />
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {userDataProfile?.map((item) => (
                  <CardProfile
                    key={item.id}
                    author={item.author}
                    coverUrl={item.coverUrl}
                    createdAt={item.createdAt}
                    name={item.name}
                    rate={3}
                    summary={item.summary}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <article className="flex flex-col items-center rounded-lg  px-14 py-5 shadow shadow-green-100">
              <Avatar url={profile?.user.avatar_url ?? ''} />
              <span
                className="mt-5 text-2xl font-bold text-gray-100
              "
              >
                {profile?.user.name}
              </span>
              <span className=" text-gray-400">{profile?.user.created_at}</span>
              <span className="mt-10 h-1 w-8 bg-gradient-horizontal" />
              <div className="space-y-10">
                <div className="mt-12 flex gap-5">
                  <BookOpen className="h-8 w-8 text-green-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-200">
                      {profile?.totalPagesRead}
                    </span>
                    <span className="text-sm text-gray-300">
                      Livros avaliados
                    </span>
                  </div>
                </div>
                <div className=" flex gap-5">
                  <LibraryBig className="h-8 w-8 text-green-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-200">
                      {profile?.totalPagesRead}
                    </span>
                    <span className="text-sm text-gray-300">Autores lidos</span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <BookA className="h-8 w-8 text-green-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-200">
                      {profile?.totalPagesRead}
                    </span>
                    <span className="text-sm text-gray-300">Autores lidos</span>
                  </div>
                </div>
                <div className="flex gap-5">
                  <Bookmark className="h-8 w-8 text-green-100" />
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-200">
                      {profile?.totalPagesRead}
                    </span>
                    <span className="text-sm text-gray-300">
                      Categoria mais lida
                    </span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  )
}
