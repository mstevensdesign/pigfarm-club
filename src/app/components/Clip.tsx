"use client";

import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Maven_Pro } from "next/font/google";

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
  controls?: boolean;
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
        <div className="mt-2 flex flex-col">
          <div className="flex items-baseline justify-between">
            {props.title && (
              <p className={`text-[20px] font-[700]`}>{props.title}</p>
            )}
          </div>
          <div className="flex items-baseline justify-between">
            {props.author && <p className="">{props.author}</p>}
            {props.date && <p className="">{props.date}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clip;
