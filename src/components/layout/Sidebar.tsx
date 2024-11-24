'use client'

import { Home, Library, Heart, Plus, Download } from 'lucide-react'
import Link from 'next/link'

const Sidebar = () => {
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Library, label: 'Library', href: '/library' },
    { icon: Heart, label: 'Liked Songs', href: '/liked' },
  ]

  const playlists = [
    'Daily Mix 1',
    'Discover Weekly',
    'Top Hits 2023',
    'Chill Vibes',
    'Rock Classics'
  ]

  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-96px)] bg-[#252525] border-r border-[#373737] p-6">
      <nav className="space-y-6">
        <div className="space-y-3">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-4 text-[#9B9B9B] hover:text-white transition-colors group"
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="pt-6 border-t border-[#373737]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[#9B9B9B] text-sm font-medium">PLAYLISTS</span>
            <Plus className="w-5 h-5 text-[#9B9B9B] hover:text-white cursor-pointer" />
          </div>
          <div className="space-y-3">
            {playlists.map((playlist) => (
              <Link
                key={playlist}
                href="#"
                className="block text-[#9B9B9B] hover:text-white transition-colors text-sm"
              >
                {playlist}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <Link
          href="#"
          className="flex items-center gap-3 text-[#9B9B9B] hover:text-white transition-colors"
        >
          <Download className="w-5 h-5" />
          <span className="text-sm">Install App</span>
        </Link>
      </div>
    </aside>
  )
}

export default Sidebar
