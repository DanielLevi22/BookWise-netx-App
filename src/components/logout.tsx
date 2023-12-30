import { LogOut } from 'lucide-react'
import { Avatar } from './avatar'
import * as Dialog from '@radix-ui/react-dialog'
import { buildNextAuthOptions } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { ButtonSigOut } from './buttonsigout'
import { SignInModal } from './DialogSingnin'
const authOptions = buildNextAuthOptions()
export async function Logout() {
  const session = await getServerSession(authOptions)
  const name = session?.user?.name?.split(' ')
  let user = ''
  if (name) {
    user = name[0]
  }
  return (
    <div className="mb-6 mt-auto flex items-center gap-3 font-bold text-gray-200">
      {session?.user ? (
        <div className="flex w-full  items-center gap-3">
          <Avatar url={session?.user.avatar_url ?? ''} />
          <span>{user}</span>
          <ButtonSigOut />
        </div>
      ) : (
        <>
          <SignInModal />
        </>
      )}
    </div>
  )
}
