"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";

type Props = {};

const Overwatch2 = (props: Props) => {
  return (
    <>
      <h1 className="text-center">Overwatch 2</h1>
      <div className="relative">
        <ReactPlayer
          className="absolute left-0 top-0"
          url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
        />
      </div>
    </>
  );
};

export default Overwatch2;
