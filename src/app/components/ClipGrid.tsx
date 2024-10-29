"use client";

import React from "react";
import { useEffect, useState, useRef } from "react";
import Clip from "./Clip";
import FilterBtn from "./FilterBtn";
import FilterModal from "./FilterModal";

type Props = {
  clips: any[];
  title: string;
};

const ClipGrid = (props: Props) => {
  const [clips, setClips] = useState(props.clips);
  const clipsCache = useRef(props.clips);

  useEffect(() => {
    console.log(clips);
  }, [clips]);

  return (
    <>
      {/* <div className="sticky top-[74px] flex items-center justify-between px-5">
        <h2 className="text-center text-2xl font-bold">{props.title}</h2>
        <FilterModal
          clips={clips}
          handleClips={setClips}
          clipsCache={clipsCache}
        />
      </div> */}
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 pb-5 md:grid-cols-2 xl:grid-cols-3">
        {clips.map((clip) => (
          <React.Fragment key={clip.clip_id}>
            {/* Use Fragment to avoid adding extra div */}
            <Clip
              url={clip.clip_url}
              title={clip.clip_title}
              description={clip.clip_description}
              date={clip.clip_date}
              author={clip.user_display_name}
              game={clip.game_title}
              profile_url={clip.profile_url}
              className=""
              controls
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ClipGrid;
