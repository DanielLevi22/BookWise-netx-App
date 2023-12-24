import dayjs from 'dayjs'
import { Avatar } from './avatar'

interface ProfileProps {
  avatarUrl: string
  username: string
  createdAt: string
}
export function Profile({ avatarUrl, createdAt, username }: ProfileProps) {
  const initialDate = dayjs(createdAt)
  const currentDate = dayjs()
  const differenceInDays = currentDate.diff(initialDate, 'day')

  let date = ''
  if (differenceInDays === 0) {
    date = 'Hoje'
  } else if (differenceInDays === 1) {
    date = `Ontem`
  } else {
    date = `Há ${differenceInDays} dias`
  }
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
