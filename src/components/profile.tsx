import { Avatar } from './avatar'

export function Profile() {
  return (
    <div className="flex gap-4">
      <Avatar url="https://github.com/daniellevi22.png" />
      <div className="flex flex-col">
        <span className="text-gray-100">Daniel Levi</span>
        <span className="text-gray-400">Hoje</span>
      </div>
    </div>
  )
}
