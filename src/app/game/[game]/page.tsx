import React from "react";

type Props = {
  params: {
    game: string;
  };
};

const page = (props: Props) => {
  let game_name = "";
  if (props.params.game === "ow2") {
    game_name = "Overwatch 2";
  }

  return <div>{game_name}</div>;
};

export default page;
