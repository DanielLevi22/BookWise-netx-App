export function Profile() {
  return (
    <div className="flex gap-4">
      <div className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-vertical">
        <img
          src="https://github.com/daniellevi22.png"
          alt=""
          className="h-10 w-10 rounded-full"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-100">Daniel Levi</span>
        <span className="text-gray-400">Hoje</span>
      </div>
    </div>
  )
}
