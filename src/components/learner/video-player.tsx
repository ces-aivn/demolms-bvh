"use client";

import { useState } from "react";
import { Play, Pause, Volume2, Maximize, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  title: string;
  duration?: string;
}

export function VideoPlayer({ title, duration = "25 phút" }: VideoPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleBarClick(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = Math.round(((e.clientX - rect.left) / rect.width) * 100);
    setProgress(pct);
  }

  return (
    <div className="rounded-xl overflow-hidden bg-gray-950 aspect-video relative group shadow-xl">
      {/* Fake video frame */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-gray-950">
        <div className="text-center px-6">
          <button
            onClick={() => setPlaying((p) => !p)}
            className="mb-4 h-16 w-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all hover:scale-110 shadow-lg shadow-black/30 border border-white/10"
          >
            {playing ? (
              <Pause className="h-7 w-7 text-white ml-0" />
            ) : (
              <Play className="h-7 w-7 text-white ml-1" />
            )}
          </button>
          <p className="text-white/80 text-sm font-medium line-clamp-2 max-w-md">{title}</p>
          <p className="text-white/40 text-xs mt-1">{duration}</p>
        </div>
      </div>

      {/* Controls overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-3 pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
        {/* Progress bar */}
        <div
          className="relative h-1 bg-white/30 rounded-full cursor-pointer mb-3"
          onClick={handleBarClick}
        >
          <div
            className="h-full bg-primary rounded-full transition-all"
            style={{ width: `${progress}%` }}
          />
          <div
            className={cn(
              "absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-md",
              "transition-all"
            )}
            style={{ left: `calc(${progress}% - 6px)` }}
          />
        </div>

        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-3">
            <button onClick={() => setPlaying((p) => !p)}>
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button onClick={() => setProgress(0)}>
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
            <Volume2 className="h-4 w-4" />
            <span className="text-xs text-white/60">0:00 / {duration}</span>
          </div>
          <button>
            <Maximize className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
