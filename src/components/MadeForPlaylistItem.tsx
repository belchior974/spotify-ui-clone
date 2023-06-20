import { ImageProps, MadeForPlaylistItemProps } from "@/interfaces";
import { Play } from "lucide-react";
import Image from "next/image";

export const MadeForPlaylistItem = ({
  name,
  description,
  images,
  external_urls,
  uri: string
}: MadeForPlaylistItemProps) => {
  const image: ImageProps = images.find(
    (image) => image.height == 300 || image.url
  );

  return (
    <a
      href={external_urls.spotify}
      target="_blank"
      className="bg-white/5 p-3 group rounded-md flex flex-col gap-2 hover:bg-white/10 h-"
    >
      <Image
        className="w-full"
        src={image?.url}
        width={116}
        height={116}
        alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
      />
      <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto -mt-16 mr-1 invisible group-hover:visible ">
        <Play className="fill-black" />
      </button>
      <strong className="font-semibold pt-1">{name}</strong>
      <span className="text-sm text-zinc-400">{description}</span>
    </a>
  );
};
