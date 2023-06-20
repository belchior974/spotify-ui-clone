import { SpotifyWebApiProps } from "@/interfaces";
import { LastItem } from "./LastItem";

interface LastItemsSectionProps {
  data: SpotifyWebApiProps;
}

export const LastItemsSection = ({ data }: LastItemsSectionProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {data?.items?.map((topItem) => (
        <div key={topItem.id}>
          <LastItem
            id={topItem.id}
            name={topItem.name}
            images={topItem.images}
            external_urls={topItem.external_urls}
            uri={topItem.uri}
          />
        </div>
      ))}
    </div>
  );
};
