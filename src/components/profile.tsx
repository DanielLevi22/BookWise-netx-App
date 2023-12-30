import dayjs from 'dayjs'
import { Avatar } from './avatar'
import { compareDate } from '@/utils/compareDate'

interface ProfileProps {
  avatarUrl: string
  username: string
  createdAt: string
}
export function Profile({ avatarUrl, createdAt, username }: ProfileProps) {
  const date = compareDate(createdAt)
  return (
    <div className="flex gap-4">
      <Avatar url={avatarUrl} />
      <div className="flex flex-col">
        <span className="text-gray-100">{username}</span>
        <span className="text-sm text-gray-400">{date}</span>
      </div>
    </div>
  )
}
