"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";
import { useEffect, useState } from "react";

type Props = {};

const Overwatch2 = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // component will unmount
    return () => {
      setIsMounted(false);
    };
  }, []);
  return (
    <>
      <h2 className="mt-5 text-center text-lg">Overwatch 2</h2>
      {isMounted && (
        <div className="m-5">
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
              className="absolute left-0 top-0"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      {isMounted && (
        <div className="m-5">
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
              className="absolute left-0 top-0"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
      {isMounted && (
        <div className="m-5">
          <div className="relative pt-[56.25%]">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
              className="absolute left-0 top-0"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Overwatch2;
