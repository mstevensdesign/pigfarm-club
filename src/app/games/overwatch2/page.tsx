"use client";

import Clip from "@/app/components/Clip";

type Props = {};

const Overwatch2 = (props: Props) => {
  return (
    <>
      <h2 className="my-3 text-center text-lg">Overwatch 2</h2>
      <div className="">
        <Clip
          url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
          title="Rip BANX"
          description="This is a description"
          className="mb-1 px-2"
        />
        <Clip
          url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
          title="Rip BANX"
          description="This is a description"
          className="mb-1 px-2"
        />
        <Clip
          url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
          title="Rip BANX"
          description="This is a description"
          className="mb-1 px-2"
        />
      </div>
    </>
  );
};

export default Overwatch2;
