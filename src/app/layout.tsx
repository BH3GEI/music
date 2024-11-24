import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Sidebar from '@/components/layout/Sidebar'
import Player from '@/components/layout/Player'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NetEase Cloud Music',
  description: 'A modern music streaming platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#252525] text-white`}>
        <Header />
        <Sidebar />
        <main className="pt-16 pl-64 min-h-[calc(100vh-96px)]">
          <div className="p-6">
            {children}
          </div>
        </main>
        <Player />
      </body>
    </html>
  )
}
