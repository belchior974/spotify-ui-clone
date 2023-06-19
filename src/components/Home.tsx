"use client"
import { SpotifyApiProps } from "@/interfaces";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image"
import { useContext, useEffect, useState } from "react";
import { AxiosContext } from "./AxiosClient";
import { Footer } from "./Footer";
import { Sidebar } from "./Sidebar";


export const HomePage = () => {

    const { axiosInstance } = useContext(AxiosContext);

    const [playlists, setPlaylists] = useState<SpotifyApiProps>({} as SpotifyApiProps);
    // const [topItems, setTopItems] = useState<>

  
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
        console.log(axiosInstance);
        const response = await axiosInstance.get(
          "me/playlists?limit=18&offset=1"
        );
        console.log(response.data.items);
        setPlaylists(response.data);
      } catch (e) {
        console.error(e);
      }
    };

    const fetchUserTopTracks = async () => {
        try {
            console.log(axiosInstance);
            const response = await axiosInstance.get(
              "me/top/tracks?time_range=short_term"
            );
            console.log(response.data.items);
            setPlaylists(response.data);
          } catch (e) {
            console.error(e);
          }
    }
  
    useEffect(() => {
      fetchUserPlaylists();
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

            {/* <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1> */}
            <h1 className="font-semibold text-3xl mt-10">{verifyPeriod()}</h1>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <a
                href="#"
                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
                />
                <strong>Life is Strange</strong>

                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
                />
                <strong>Life is Strange</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
                />
                <strong>Life is Strange</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
                />
                <strong>Life is Strange</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
                />
                <strong>Life is Strange</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>
              </a>
              <a
                href="#"
                className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
              >
                <Image
                  src="/album.jpg"
                  width={104}
                  height={104}
                  alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
                />
                <strong>Life is Strange</strong>
                <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible ">
                  <Play />
                </button>
              </a>
            </div>

            <h2 className="font-semibold text-2xl mt-10">
              Made For Carlos Belchior
            </h2>

            <div className="grid grid-cols-8 gap-4 mt-4">
              <a
                href=""
                className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 "
              >
                <Image
                  className="w-full"
                  src="/album.jpg"
                  width={120}
                  height={120}
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
                  width={120}
                  height={120}
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
                  width={120}
                  height={120}
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
                  width={120}
                  height={120}
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
                  width={120}
                  height={120}
                  alt="Capa do álbum Life is Strange da dupla Angus and Julia Stone"
                />
                <strong className="font-semibold">Daily Mix 1</strong>
                <span className="text-sm text-zinc-400">
                  Angus & Julia Stone, Clairo,The Luminieers and more
                </span>
              </a>
            </div>
          </main>
        </div>
        <Footer />
      </div>
    )
}