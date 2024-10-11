"use client";

import ReactPlayer from "react-player";
import { useEffect, useState } from "react";
import { Inter, Londrina_Solid, Maven_Pro } from "next/font/google";
const londrina = Londrina_Solid({
  subsets: ["latin"],
  weight: ["400"],
});
const maven = Maven_Pro({
  subsets: ["latin"],
  weight: ["400"],
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
            {props.title && (
              <p
                className={`${londrina.className} text-xl font-normal text-gray-600 md:text-2xl lg:text-3xl`}
              >
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
            {/* {props.description && (
              <p className="text-xs font-light text-gray-600 md:text-sm lg:text-lg">
                {props.description}
              </p>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clip;
