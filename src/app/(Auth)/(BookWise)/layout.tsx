import { Sidebar } from '@/components/sidebar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="m-auto flex w-[1440px]">
      <Sidebar />
      {children}
    </main>
  )
}
