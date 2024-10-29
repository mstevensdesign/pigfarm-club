"use client";

import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Maven_Pro } from "next/font/google";
import Link from "next/link";

const maven = Maven_Pro({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  url?: string;
  author?: string;
  title?: string;
  description?: string;
  className?: string;
  date?: string;
  game?: string;
  profile_url?: string;
  controls?: boolean;
  user_id?: number;
};

const Clip = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // component will unmount
    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <div className={`card ${props.className} ${maven.className}`}>
      <div className="rounded-lg bg-white shadow-md">
        {isMounted && (
          <ReactPlayer
            url={props.url}
            className="aspect-video"
            width="100%"
            height="100%"
            controls={props.controls}
          />
        )}
        <div className="flex items-center justify-between px-2 pb-1">
          <div className="flex flex-col justify-center gap-y-1 align-middle">
            <div className="">
              {props.title && (
                <p className={`text-[20px] font-[700]`}>{props.title}</p>
              )}
            </div>
            <div className="flex gap-x-1">
              {/* {props.author && <p className="">{props.author}</p>} */}
              {props.author && (
                <Link
                  href={`/roster/${props.user_id}`}
                  className="hover:underline"
                >
                  {props.author}
                </Link>
              )}
              <p>&bull;</p>
              {props.date && <p className="">{props.date}</p>}
            </div>
            <div className="">
              {props.game && (
                <span className="rounded-lg bg-[#93C63E] p-1 text-white">
                  {props.game}
                </span>
              )}
            </div>
          </div>
          <div className="">
            <Link href={`/roster/${props.user_id}`}>
              <img
                alt=""
                src={props.profile_url}
                // src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="outline-yellow inline-block h-14 w-14 rounded-full hover:outline"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clip;
