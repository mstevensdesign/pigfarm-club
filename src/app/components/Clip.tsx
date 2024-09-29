import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

type Props = {
  url: string;
  title?: string;
  description?: string;
};

const Clip = (props: Props) => {
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
      <div className="m-5">
        <div className="relative pt-[56.25%]">
          <h2 className="absolute bottom-0 left-0 z-10">{props.title}</h2>
          <h2 className="absolute bottom-0 right-0 z-10">
            {props.description}
          </h2>
          {isMounted && (
            <ReactPlayer
              url={props.url}
              className="absolute left-0 top-0"
              width="100%"
              height="100%"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Clip;
