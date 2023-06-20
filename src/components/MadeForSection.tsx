import { SpotifyApiProps } from "@/interfaces";
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
          <MadeForPlaylistItem
            name={playlist.name}
            description={playlist.description}
            images={playlist.images}
            external_urls={playlist.external_urls}
            uri={playlist.uri}
          />
        ))}
      </div>
    </>
  );
};
