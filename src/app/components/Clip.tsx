import ReactPlayer from "react-player";
import Loader from "./Loader";
import { TClip } from "../utils/types";

const Clip = (clip: TClip) => {
  return (
    <ReactPlayer
      url={clip.url}
      className="aspect-video"
      width="100%"
      height="100%"
      controls
      fallback={<Loader />}
    />
  );
};

export default Clip;
