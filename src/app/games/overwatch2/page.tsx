"use client";

import Clip from "@/app/components/Clip";

type Props = {};

const Overwatch2 = (props: Props) => {
  return (
    <>
      <h2 className="mt-5 text-center text-lg">Overwatch 2</h2>
      <Clip
        url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
        title="Rip BANX"
        description="This is a description"
      />
      <Clip
        url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
        title="Rip BANX"
        description="This is a description"
      />
      <Clip
        url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
        title="Rip BANX"
        description="This is a description"
      />
    </>
  );
};

export default Overwatch2;
