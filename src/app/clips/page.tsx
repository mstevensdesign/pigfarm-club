import React from "react";
import ClipGrid from "../components/ClipGrid";
import getClips from "../utils/utils";

type Props = {};

const ClipsPage = async (props: Props) => {
  const clips_ow2 = await getClips("ow2");

  return (
    <div className="">
      <ClipGrid clips={clips_ow2} game="Overwatch 2" />
      <ClipGrid clips={clips_ow2} game="Test" />
    </div>
  );
};

export default ClipsPage;
