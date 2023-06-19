export interface SpotifyApiProps {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: [PlaylistProps];
}

interface PlaylistProps {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrlPlaylistProps;
  href: string;
  id: string;
  images: [ImagePlaylistProps];
  name: string;
  owner: OwnerPlaylistProps;
  type: string;
  uri: string;
}

interface ImagePlaylistProps {
  url: string;
  height: number;
  width: number;
}

interface ExternalUrlPlaylistProps {
  spotify: string;
}

interface OwnerPlaylistProps {
  external_urls: ExternalUrlPlaylistProps;
  followers: FollowersPlaylistProps;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

interface FollowersPlaylistProps {
  href: string;
  total: number;
}
