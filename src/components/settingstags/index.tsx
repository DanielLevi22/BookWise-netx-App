'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import { TagItem } from './tagitem'

export function Tags() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-10 flex w-full items-center gap-3">
        <TagItem
          value="tab1"
          title="My details"
          isSelected={currentTab === 'tab1'}
        />
        <TagItem
          value="tab2"
          title="Profile"
          isSelected={currentTab === 'tab2'}
        />
        <TagItem
          value="tab3"
          title="Password"
          isSelected={currentTab === 'tab3'}
        />
        <TagItem value="tab4" title="Team" isSelected={currentTab === 'tab4'} />
        <TagItem value="tab5" title="Pan" isSelected={currentTab === 'tab5'} />
        <TagItem
          value="tab6"
          title="Billing"
          isSelected={currentTab === 'tab6'}
        />
        <TagItem
          value="tab7"
          title="Email"
          isSelected={currentTab === 'tab7'}
        />
        <TagItem
          value="tab8"
          title="Notifications"
          isSelected={currentTab === 'tab8'}
        />
        <TagItem
          value="tab9"
          title="Integrations"
          isSelected={currentTab === 'tab9'}
        />
        <TagItem
          value="tab10"
          title="API"
          isSelected={currentTab === 'tab10'}
        />
      </Tabs.List>
    </Tabs.Root>
  )
}
