import React from "react";
import Clip from "./Clip";

type Props = {
  clips: any[];
  game: string;
};

const ClipGrid = (props: Props) => {
  console.log(props.clips);
  return (
    <div className="grid grid-cols-1 gap-x-2 gap-y-4 p-2 pb-5 md:grid-cols-2 xl:grid-cols-3">
      {props.clips.map((clip) => (
        <React.Fragment key={clip.id}>
          {/* Use Fragment to avoid adding extra div */}
          <Clip
            url={clip.url}
            title={clip.title}
            description={clip.description}
            date={clip.date}
            author={clip.author}
            className="mb-1 px-2"
            controls
          />
        </React.Fragment>
      ))}
    </div>
  );
};

export default ClipGrid;
