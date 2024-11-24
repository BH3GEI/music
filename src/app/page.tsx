'use client'

import Image from 'next/image'
import { Play, Heart, MoreHorizontal } from 'lucide-react'

const featuredPlaylists = [
  {
    id: 1,
    title: 'Daily Mix 1',
    description: 'Personalized playlist for you',
    imageUrl: 'https://picsum.photos/400/400?random=1',
  },
  {
    id: 2,
    title: 'Top Hits 2023',
    description: 'Most popular tracks right now',
    imageUrl: 'https://picsum.photos/400/400?random=2',
  },
  {
    id: 3,
    title: 'Discover Weekly',
    description: 'New music based on your taste',
    imageUrl: 'https://picsum.photos/400/400?random=3',
  },
  {
    id: 4,
    title: 'Chill Vibes',
    description: 'Relaxing music for your day',
    imageUrl: 'https://picsum.photos/400/400?random=4',
  },
]

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-80 rounded-xl overflow-hidden">
        <Image
          src="https://picsum.photos/1920/1080"
          alt="Featured playlist"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <h1 className="text-4xl font-bold mb-2">Featured Playlist</h1>
          <p className="text-lg text-gray-200 mb-4">Discover the best new music</p>
          <button className="bg-[#EC4141] hover:bg-[#D63E3E] text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 transition-colors">
            <Play className="w-5 h-5" />
            Play Now
          </button>
        </div>
      </section>

      {/* Featured Playlists */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredPlaylists.map((playlist) => (
            <div
              key={playlist.id}
              className="bg-[#2F2F2F] p-4 rounded-lg hover:bg-[#373737] transition-colors group"
            >
              <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={playlist.imageUrl}
                  alt={playlist.title}
                  fill
                  className="object-cover"
                />
                <button className="absolute right-2 bottom-2 w-10 h-10 bg-[#EC4141] rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-5 h-5 text-white ml-1" />
                </button>
              </div>
              <h3 className="font-medium mb-1">{playlist.title}</h3>
              <p className="text-sm text-[#9B9B9B]">{playlist.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <Heart className="w-5 h-5 text-[#9B9B9B] hover:text-[#EC4141] cursor-pointer" />
                <MoreHorizontal className="w-5 h-5 text-[#9B9B9B] hover:text-white cursor-pointer" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
