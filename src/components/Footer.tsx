"use client";
import {
  Laptop2,
  LayoutList,
  Maximize2,
  Mic2,
  Pause,
  Play,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CurrentMusic } from "./Footer/CurrentMusic";
import { MusicPlayer } from "./Footer/MusicPlayer";
import { SoundConfig } from "./Footer/SoundConfig";

export const Footer = () => {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between sticky bottom-0 h-24">
      <CurrentMusic />
      <MusicPlayer />
      <SoundConfig />
    </footer>
  );
};
