import React from "react";
import ClipGrid from "../components/ClipGrid";
import { getClips, getClipsByTag } from "../utils/utils";

type Props = {};

const ClipsPage = async (props: Props) => {
  const clips_ow2 = await getClips("ow2");
  const clips_by_tag = await getClipsByTag("ow2", ["walkblind"]);

  return (
    <div className="">
      <ClipGrid clips={clips_ow2} game="Overwatch 2" />
      <ClipGrid clips={clips_by_tag} game="Test" />
    </div>
  );
};

export default ClipsPage;
