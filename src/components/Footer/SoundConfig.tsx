import { Laptop2, LayoutList, Maximize2, Mic2, Volume } from "lucide-react";

export const SoundConfig = () => {
  return (
    <div className="flex items-center gap-4">
      <Mic2 size={20} className="text-zinc-400 hover:text-zinc-100" />
      <LayoutList size={20} className="text-zinc-400 hover:text-zinc-100" />
      <Laptop2 size={20} className="text-zinc-400 hover:text-zinc-100" />
      <div className="flex items-center gap-2">
        <Volume size={20} className="text-zinc-400 hover:text-zinc-100"  />
        <div className="h-1 rounded-full w-24 bg-zinc-600">
          <div className="bg-zinc-200 w-10 h-1 rounded-full hover:bg-green-400"></div>
        </div>
      </div>
      <Maximize2 size={20} className="text-zinc-400 hover:text-zinc-100" />
    </div>
  );
};
