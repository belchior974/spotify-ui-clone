interface MenuItemPlaylistProps {
  label: string;
  url: string;
}

export const MenuItemPlaylist = ({ label, url }: MenuItemPlaylistProps) => {
  return (
    <a href={`${url}`} target="_blank" className="text-sm text-zinc-400 hover:text-zinc-100">
      {label}
    </a>
  );
};
