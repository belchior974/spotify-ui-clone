import { ChevronUp } from "lucide-react";
import Image from "next/image";

export const CurrentMusic = () => {
  return (
    <div className="flex items-center gap-3 group">
      <Image
        src="/album.jpg"
        width={56}
        height={56}
        alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
      />
      <button className="rounded-full bg-black/70 p-1 -mt-5 -ml-12 invisible group-hover:visible">
        <ChevronUp />
      </button>
      <div className="flex flex-col ml-2">
        <strong className="font-normal">Love Song</strong>
        <span className="text-xs text-zinc-400">Angus & Julia Stone</span>
      </div>
    </div>
  );
};
