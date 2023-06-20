"use client"
import { SpotifyApiProps, SpotifyWebApiProps, UserProfile } from "@/interfaces";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "./AxiosClient";
import { Footer } from "./Footer";
import { LastItemsSection } from "./LastItemsSection";
import { MadeForSection } from "./MadeForSection";
import { Sidebar } from "./Sidebar";


export const HomePage = () => {

    const { axiosInstance } = useContext(AxiosContext);

    const [playlists, setPlaylists] = useState<SpotifyApiProps>({} as SpotifyApiProps);
    const [topItems, setTopItems] = useState<SpotifyWebApiProps>({} as SpotifyWebApiProps);
    const [userProfile, setUserProfile] = useState<UserProfile>({} as UserProfile);
    const [madeForPlaylists, setMadeForPlaylists] = useState<SpotifyApiProps>({} as SpotifyApiProps);
  
    const verifyPeriod = () => {
      let now = new Date();
      if (now.getHours() >= 5 && now.getHours() < 12) {
        return "Good Morning";
      } else if (now.getHours() >= 12 && now.getHours() < 18) {
        return "Good Afternoon";
      } else {
        return "Good Evenning";
      }
    };
  
    const fetchUserPlaylists = async () => {
      try {
        const response = await axiosInstance.get(
          "me/playlists?limit=18&offset=1"
        );
        setPlaylists(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchMadeForPlaylists = async () => {
      try {
        const response = await axiosInstance.get(
          "me/playlists?limit=7&offset=1"
        );
        setMadeForPlaylists(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchUserTopItems = async () => {
        try {
            const response = await axiosInstance.get(
              "me/top/artists?time_range=short_term&limit=6"
            );

            setTopItems(response.data);
          } catch (e) {
            console.error(e);
          }
    }

    const fetchUserProfile = async () => {
      try {
        const response: any = await axiosInstance.get(
          "me"
        );
        setUserProfile(response.data);
      } catch (e) {
        console.error(e);
      }
    }
  
    useEffect(() => {
      fetchUserPlaylists();
      fetchUserTopItems();
      fetchUserProfile();
      fetchMadeForPlaylists();
    }, []);
  
    return (
        <div className="h-screen flex flex-col">
        <div className="flex flex-1">
          <Sidebar data={playlists} />
          <main className="flex-1 p-6">
            <div className="flex items-center gap-4">
              <button className="rounded-full bg-black/40 p-1">
                <ChevronLeft />
              </button>
              <button className="rounded-full bg-black/40 p-1">
                <ChevronRight />
              </button>
            </div>

            <h1 className="font-semibold text-3xl mt-10">{verifyPeriod()}</h1>

            <LastItemsSection data={topItems} />

            <MadeForSection display_name={userProfile.display_name} data={madeForPlaylists} />
          </main>
        </div>
        <Footer />
      </div>
    )
}