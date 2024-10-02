import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

type Props = {
  url: string;
  author?: string;
  title?: string;
  description?: string;
  className?: string;
  date?: string;
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
    <div className={`card ${props.className}`}>
      <div className="rounded-lg bg-white p-4 shadow-md">
        {isMounted && (
          <ReactPlayer
            url={props.url}
            className="aspect-video"
            width="100%"
            height="100%"
          />
        )}
        <div className="mt-4 flex justify-between">
          <div className="flex flex-col">
            {props.title && (
              <p className="text-sm font-semibold md:text-xl lg:text-2xl">
                {props.title}
              </p>
            )}
            {props.author && (
              <p className="text-sm text-gray-700 md:text-base lg:text-lg">
                {props.author}
              </p>
            )}
          </div>
          <div className="flex flex-col text-right">
            {props.date && (
              <p className="text-sm text-gray-700 md:text-base lg:text-lg">
                {props.date}
              </p>
            )}
            {props.description && (
              <p className="text-sm text-gray-700 md:text-base lg:text-lg">
                {props.description}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clip;
