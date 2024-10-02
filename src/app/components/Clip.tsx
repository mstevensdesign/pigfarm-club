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
        {props.title && (
          <h2 className="mt-4 text-xl font-semibold">{props.title}</h2>
        )}
        {props.author && (
          <p className="mt-2 text-sm text-gray-600">{props.author}</p>
        )}
        {props.date && (
          <p className="mt-1 text-xs text-gray-500">{props.date}</p>
        )}
        {props.description && (
          <p className="mt-2 text-gray-700">{props.description}</p>
        )}
      </div>
    </div>
  );
};

export default Clip;
