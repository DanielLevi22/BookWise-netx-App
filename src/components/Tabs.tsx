'use client'
import * as Tabs from '@radix-ui/react-tabs'

export const Tags = () => (
  <Tabs.Root defaultValue="tab1" orientation="horizontal">
    <Tabs.List aria-label="tabs example">
      <Tabs.Trigger value="tab1" />
      <Tabs.Trigger value="tab2" />
      <Tabs.Trigger value="tab3" />
    </Tabs.List>
    <Tabs.Content value="tab1">Tab one content</Tabs.Content>
    <Tabs.Content value="tab2">Tab two content</Tabs.Content>
    <Tabs.Content value="tab3">Tab three content</Tabs.Content>
  </Tabs.Root>
)
