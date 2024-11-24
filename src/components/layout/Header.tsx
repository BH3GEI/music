'use client'

import { Search, User, Bell } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="fixed top-0 w-full h-16 bg-[#252525] border-b border-[#373737] z-50">
      <div className="flex items-center justify-between h-full px-6">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-white text-xl font-bold">
            NetEase Music
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            {['Discover', 'My Music', 'Follow', 'Shop'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[#9B9B9B] hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden md:flex items-center">
            <input
              type="text"
              placeholder="Search music..."
              className="bg-[#2F2F2F] text-white px-4 py-2 rounded-full w-64 focus:outline-none focus:ring-2 focus:ring-[#EC4141]"
            />
            <Search className="absolute right-3 text-[#9B9B9B] w-5 h-5" />
          </div>
          
          <div className="flex items-center gap-4">
            <Bell className="text-[#9B9B9B] hover:text-white cursor-pointer w-5 h-5" />
            <div className="relative w-8 h-8 rounded-full overflow-hidden">
              <Image
                src="https://i.pravatar.cc/100"
                alt="User avatar"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
