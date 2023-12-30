interface AvatarProps {
  url: string

  AvatarVariant?: 'primary' | 'secondary'
}

export function Avatar({ url, AvatarVariant }: AvatarProps) {
  return (
    <div
      className={` ${
        AvatarVariant === 'secondary'
          ? 'h-[72px] w-[72px]'
          : ' h-[42px] w-[42px] '
      }  flex items-center justify-center rounded-full bg-gradient-vertical`}
    >
      <img
        src={url}
        alt=""
        className={`${
          AvatarVariant === 'secondary' ? 'h-[72px] w-[72px]' : ' h-10 w-10 '
        } block rounded-full object-cover `}
      />
    </div>
  )
}
