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
      {isMounted && (
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
            className="absolute left-0 top-0"
            width="100%"
            height="100%"
          />
        </div>
      )}
    </>
  );
};

export default Overwatch2;
