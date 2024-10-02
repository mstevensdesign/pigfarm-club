"use client";

import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

type Props = {
  key?: number;
  url?: string;
  author?: string;
  title?: string;
  description?: string;
  className?: string;
  date?: string;
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
    <div key={props.key} className={`card ${props.className}`}>
      <div className="rounded-lg bg-white p-4 shadow-md">
        {isMounted && (
          <ReactPlayer
            url={props.url}
            className="aspect-video"
            width="100%"
            height="100%"
          />
        )}
        <div className="mt-2 flex flex-col">
          <div className="flex items-baseline justify-between">
            {props.title && (
              <p className="text-sm font-semibold md:text-lg lg:text-xl">
                {props.title}
              </p>
            )}
            {props.date && (
              <p className="text-xs font-light text-gray-600 md:text-sm lg:text-lg">
                {props.date}
              </p>
            )}
          </div>
          <div className="flex items-baseline justify-between">
            {props.author && (
              <p className="text-xs font-normal text-gray-600 md:text-sm lg:text-lg">
                {props.author}
              </p>
            )}
            {props.description && (
              <p className="text-xs font-light text-gray-600 md:text-sm lg:text-lg">
                {props.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clip;
