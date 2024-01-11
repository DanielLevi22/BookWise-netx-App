import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TagItem({ isSelected = false, title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className=" relative  text-base font-normal text-purple-100 outline-none data-[state=active]:text-violet-300 hover:text-violet-200"
    >
      <span
        className={`whitespace-nowrap  rounded-full border border-purple-100 px-4 py-1 ${
          isSelected === true &&
          'border-transparent bg-purple-200 py-[5px] text-gray-100 hover:border-purple-100'
        }`}
      >
        {title}
      </span>
    </Tabs.Trigger>
  )
}
