import { LastItemProps } from "@/interfaces";
import { Play } from "lucide-react";
import Image from "next/image";

export const LastItem = ({
  id,
  name,
  images,
  external_urls,
  uri
}: LastItemProps) => {
  const image: any = images.find((image) => image.height == 160);

  return (
    <a
      href={external_urls.spotify}
      target='_blank'
      className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors h-28"
    >
      <Image
        src={image.url}
        width={112}
        height={112}
        alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
      />
      <strong>{name}</strong>

      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
        <Play className="fill-black" />
      </button>
    </a>
  );
};
