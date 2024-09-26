"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";

type Props = {};

const Overwatch2 = (props: Props) => {
  return (
    <>
      <div className="flex h-[calc(100vh-74px)] w-screen flex-col items-center justify-center">
        <h1 className="text-center">Overwatch 2</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=Smoz9J3ZSts" />
      </div>
    </>
  );
};

export default Overwatch2;
