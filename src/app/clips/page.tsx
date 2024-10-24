import React from "react";
import ClipGrid from "../components/ClipGrid";
import { getClips, getClipsByTag } from "../utils/utils";

type Props = {};

const ClipsPage = async (props: Props) => {
  const clips = await getClips();

  return (
    <div className="">
      <ClipGrid clips={clips} title="Overwatch 2" />
      <ClipGrid clips={clips} title="Castle Crashers" />
    </div>
  );
};

export default ClipsPage;
