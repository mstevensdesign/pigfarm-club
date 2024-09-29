import ReactPlayer from "react-player";

type Props = {
  url: string;
};

const Clip = (props: Props) => {
  return (
    <>
      <div className="m-5">
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={props.url}
            className="absolute left-0 top-0"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </>
  );
};

export default Clip;
