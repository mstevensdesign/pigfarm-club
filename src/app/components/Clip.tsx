import ReactPlayer from "react-player";
import Loader from "./Loader";
import { TClip } from "../utils/types";
import Link from "next/link";
import React from "react";

const Clip = (clip: TClip) => {
  console.log(clip);
  return (
    <div
      key={clip.id}
      className="card transform shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
    >
      <div className="overflow-hidden rounded-lg bg-white">
        <ReactPlayer
          url={clip.url}
          className="aspect-video"
          width="100%"
          height="100%"
          fallback={<Loader />}
        />
        <Link href={`/clips/${clip.id}`}>
          <div className="flex items-center justify-between rounded-md px-2 pb-1 transition-colors duration-200 ease-in-out hover:bg-[#fcd22a82]">
            <div className="flex flex-col justify-center gap-y-1 align-middle">
              <div className="">
                <p className="text-[20px] font-[700]">{clip.title}</p>
              </div>
              <div className="flex gap-x-1">
                <Link
                  href={`/roster/${clip.user_id}`}
                  className="hover:underline"
                >
                  {clip.user_display_name}
                </Link>

                <p>&bull;</p>
                {clip.date && <p className="">{clip.date}</p>}
              </div>
              <div className="">
                <span className="rounded-lg bg-[#93C63E] p-1 text-white">
                  {clip.game_title}
                </span>
              </div>
            </div>
            <div className="">
              <Link href={`/roster/${clip.user_id}`}>
                <img
                  alt=""
                  src={clip.user_profile_url}
                  className="inline-block h-14 w-14 rounded-full outline-yellow hover:outline"
                />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Clip;
