export interface SpotifyWebApiProps{
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: [TopItemsProps];
}

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
  images: [ImageProps];
  name: string;
  owner: OwnerPlaylistProps;
  type: string;
  uri: string;
}

interface TopItemsProps {
  external_urls: ExternalUrlPlaylistProps;
  followers: FollowersProps;
  genres: string[];
  href: string;
  id: string;
  images: [ImageProps];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface FollowersProps {
  href: string;
  total: number;
}

export interface ImageProps {
  url: string;
  height: number;
  width: number;
}

interface ExternalUrlPlaylistProps {
  spotify: string;
}

interface OwnerPlaylistProps {
  external_urls: ExternalUrlPlaylistProps;
  followers: FollowersProps;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface LastItemProps {
  id: string;
  name: string;
  images: [ImageProps];
  external_urls: ExternalUrlPlaylistProps;
  uri: string;
}


export interface UserProfile {
  country: string;
  display_name: string;
  email: string;
  explicit_content:ExplicitContent;
  external_urls: ExternalUrlPlaylistProps;
  followers:  FollowersProps;
  href: string;
  id: string;
  images: [ImageProps];
  product: string;
  type: string;
  uri: string
}

interface ExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface MadeForPlaylistItemProps {
  name: string;
  description: string;
  images: [ImageProps];
  external_urls: ExternalUrlPlaylistProps;
  uri: string;
}


