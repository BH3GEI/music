'use client'

import { 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  Volume2, 
  Repeat, 
  Shuffle,
  Heart,
  ListMusic
} from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(80)

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 bg-[#252525] border-t border-[#373737] px-4">
      <div className="flex items-center justify-between h-full max-w-screen-2xl mx-auto">
        {/* Current Track Info */}
        <div className="flex items-center gap-4 w-1/4">
          <div className="relative w-14 h-14">
            <Image
              src="https://picsum.photos/200"
              alt="Album cover"
              fill
              className="object-cover rounded"
            />
          </div>
          <div>
            <h4 className="text-white text-sm font-medium">Song Title</h4>
            <p className="text-[#9B9B9B] text-xs">Artist Name</p>
          </div>
          <Heart className="w-5 h-5 text-[#9B9B9B] hover:text-[#EC4141] cursor-pointer" />
        </div>

        {/* Playback Controls */}
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-6">
            <Shuffle className="w-5 h-5 text-[#9B9B9B] hover:text-white cursor-pointer" />
            <SkipBack className="w-5 h-5 text-[#9B9B9B] hover:text-white cursor-pointer" />
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-[#EC4141] transition-colors"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 text-black" />
              ) : (
                <Play className="w-4 h-4 text-black ml-1" />
              )}
            </button>
            <SkipForward className="w-5 h-5 text-[#9B9B9B] hover:text-white cursor-pointer" />
            <Repeat className="w-5 h-5 text-[#9B9B9B] hover:text-white cursor-pointer" />
          </div>
          <div className="w-full mt-2 flex items-center gap-2">
            <span className="text-xs text-[#9B9B9B]">2:14</span>
            <div className="flex-1 h-1 bg-[#373737] rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full hover:bg-[#EC4141] cursor-pointer" />
            </div>
            <span className="text-xs text-[#9B9B9B]">3:45</span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center gap-4 w-1/4 justify-end">
          <ListMusic className="w-5 h-5 text-[#9B9B9B] hover:text-white cursor-pointer" />
          <Volume2 className="w-5 h-5 text-[#9B9B9B]" />
          <div className="w-24 h-1 bg-[#373737] rounded-full">
            <div 
              className="h-full bg-white rounded-full hover:bg-[#EC4141] cursor-pointer"
              style={{ width: `${volume}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Player
