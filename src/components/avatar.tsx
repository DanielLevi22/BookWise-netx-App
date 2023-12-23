interface AvatarProps {
  url: string
}

export function Avatar({ url }: AvatarProps) {
  return (
    <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-vertical">
      <img src={url} alt="" className="h-10 w-10 rounded-full" />
    </div>
  )
}
