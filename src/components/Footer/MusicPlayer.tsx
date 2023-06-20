"use client"
import { Pause, Play, Repeat, Shuffle, SkipBack, SkipForward } from "lucide-react"
import { useState } from "react";


export const MusicPlayer = () => {
    const [showIcon, setShowIcon] = useState<Boolean>(true);

    return (
        <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-400 hover:text-zinc-100" />
          <SkipBack size={20} className="text-zinc-400 hover:text-zinc-100" />
          <button
            className={`w-10 h-10 flex items-center justify-center ${
              showIcon ? "pl-1" : ""
            } rounded-full bg-white text-black hover:w-11 hover:h-11`}
            onClick={() => setShowIcon(!showIcon)}
          >
            {showIcon ? (
              <Play className="fill-black" />
            ) : (
              <Pause className="fill-black" />
            )}
          </button>
          <SkipForward
            size={20}
            className="text-zinc-400 hover:text-zinc-100"
          />
          <Repeat size={20} className="text-zinc-400 hover:text-zinc-100" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">0:31</span>
          <div className="h-1 rounded-full w-96 bg-zinc-600">
            <div className="bg-zinc-200 w-40 h-1 rounded-full hover:bg-green-400"></div>
          </div>
          <span className="text-xs text-zinc-400">2:14</span>
        </div>
      </div>
    )

}