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
        <div className="mt-4 flex justify-between">
          <div className="flex flex-col">
            {props.title && (
              <p className="text-sm font-semibold md:text-lg lg:text-xl">
                {props.title}
              </p>
            )}
            {props.author && (
              <p className="text-sm font-normal text-gray-600 md:text-lg lg:text-xl">
                {props.author}
              </p>
            )}
          </div>
          <div className="flex flex-col text-right">
            {props.date && (
              <p className="text-sm font-thin text-gray-600 md:text-lg lg:text-xl">
                {props.date}
              </p>
            )}
            {props.description && (
              <p className="text-sm font-light text-gray-600 md:text-lg lg:text-xl">
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
