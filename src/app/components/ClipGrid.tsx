import React from "react";
import Clip from "./Clip";

const ClipGrid = (props: any) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 pb-5 md:grid-cols-2 md:px-6 xl:grid-cols-3">
        {props.clips.map((clip: any) => (
          <React.Fragment key={clip.id}>
            {/* Use Fragment to avoid adding extra div */}
            <Clip
              url={clip.url}
              title={clip.title}
              description={clip.description}
              date={clip.date}
              user_display_name={clip.user_display_name}
              game_title={clip.game_title}
              user_profile_url={clip.user_profile_url}
              user_id={clip.user_id}
              id={0}
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ClipGrid;
