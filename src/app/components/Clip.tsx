"use client";

import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

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
    <div className={`card ${props.className}`}>
      <div className="rounded-lg bg-white p-4 shadow-md">
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
            {props.title && <p className="">{props.title}</p>}
            {props.date && <p className="">{props.date}</p>}
          </div>
          <div className="flex items-baseline justify-between">
            {props.author && <p className="">{props.author}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clip;
