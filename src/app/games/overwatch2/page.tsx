"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";
import { useEffect, useState } from "react";
import Clip from "@/app/components/Clip";

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
      {isMounted && <Clip url="https://www.youtube.com/watch?v=Smoz9J3ZSts" />}
      {isMounted && <Clip url="https://www.youtube.com/watch?v=Smoz9J3ZSts" />}
      {isMounted && <Clip url="https://www.youtube.com/watch?v=Smoz9J3ZSts" />}
    </>
  );
};

export default Overwatch2;
