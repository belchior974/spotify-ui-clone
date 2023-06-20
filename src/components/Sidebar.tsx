"use client";
import { HomeIcon, Library, Search } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "./AxiosClient";
import { ColoredButton } from "./ColoredButton";
import { MenuItem } from "./MenuItem";
import { MenuItemPlaylist } from "./MenuItemPlaylist";
import { SpotifyApiProps } from "@/interfaces";
import { IconBoxSidebar } from "./IconBoxSidebar";

interface SidebarProps {
    data: SpotifyApiProps
}


export const Sidebar = ({ data }: SidebarProps) => {

  return (
    <aside className="w-72 bg-zinc-950 p-6">
      <div className="flex items-center gap-2">
        <ColoredButton color="red" />
        <ColoredButton color="yellow" />
        <ColoredButton color="green" />
      </div>

      <IconBoxSidebar>
        <MenuItem label="Home">
          <HomeIcon />
        </MenuItem>
        <MenuItem label="Search">
          <Search />
        </MenuItem>
        <MenuItem label="Your Library">
          <Library />
        </MenuItem>
      </IconBoxSidebar>

      <nav className="mt-6 pt-10 border-t border-zinc-800 flex flex-col gap-3 max-h-screen overflow-auto scroll-pl-0">
        {data?.items?.map((playlist) => (
          <MenuItemPlaylist
            label={playlist.name}
            url={playlist.external_urls.spotify}
          />
        ))}
      </nav>
    </aside>
  );
};
