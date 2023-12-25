'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TagItem } from './tagitem'
import { categoryBooks } from '@/@type/category-books'
import * as ScrollArea from '@radix-ui/react-scroll-area'
interface TagProps {
  category: categoryBooks[]
}
export function Tags({ category }: TagProps) {
  const [currentTab, setCurrentTab] = useState('Tudo')
  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab} className="">
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className=" w-full overflow-x-scroll pb-2  ">
          <Tabs.List className="mt-10 flex w-full items-center gap-3">
            {category.map((item) => (
              <TagItem
                key={item.id}
                value={item.name}
                title={item.name}
                isSelected={currentTab === item.name}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>

        <ScrollArea.Scrollbar
          className="flex h-0.5 translate-y-1.5 touch-none flex-col bg-zinc-100"
          orientation="horizontal"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
