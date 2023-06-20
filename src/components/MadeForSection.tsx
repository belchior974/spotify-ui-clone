import { SpotifyApiProps, UserProfile } from "@/interfaces";
import Image from "next/image";
import { MadeForPlaylistItem } from "./MadeForPlaylistItem";

interface MadeForSectionProps {
  display_name: string;
  data: SpotifyApiProps;
}

export const MadeForSection = ({ display_name, data }: MadeForSectionProps) => {
  return (
    <>
      <h2 className="font-semibold text-2xl mt-10">Made For {display_name}</h2>

      <div className="grid grid-cols-7 gap-4 mt-4">
        {data?.items?.map((playlist) => (
        //   <div key={playlist.id}>
            <MadeForPlaylistItem
              name={playlist.name}
              description={playlist.description}
              images={playlist.images}
              external_urls={playlist.external_urls}
              uri={playlist.uri}
            />
        //   </div>
        ))}

        {/* <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={116}
            height={116}
            alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Angus & Julia Stone, Clairo,The Luminieers and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={116}
            height={116}
            alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Angus & Julia Stone, Clairo,The Luminieers and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={116}
            height={116}
            alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Angus & Julia Stone, Clairo,The Luminieers and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={116}
            height={116}
            alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Angus & Julia Stone, Clairo,The Luminieers and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
        >
          <Image
            className="w-full"
            src="/album.jpg"
            width={116}
            height={116}
            alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Angus & Julia Stone, Clairo,The Luminieers and more
          </span>
        </a> */}
      </div>
    </>
  );
};
