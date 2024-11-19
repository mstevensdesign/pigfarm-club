import ReactPlayer from "react-player";
import Loader from "./Loader";
import { TClip } from "../utils/types";
import Link from "next/link";

const Clip = (clip: TClip) => {
  console.log(clip);
  return (
    <div className={`card`}>
      <div className="rounded-lg bg-white shadow-md">
        <ReactPlayer
          url={clip.url}
          className="aspect-video"
          width="100%"
          height="100%"
          fallback={<Loader />}
        />

        <div className="flex items-center justify-between px-2 pb-1">
          <div className="flex flex-col justify-center gap-y-1 align-middle">
            <div className="">
              <p className={`text-[20px] font-[700]`}>{clip.title}</p>
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
      </div>
    </div>
  );
};

export default Clip;
