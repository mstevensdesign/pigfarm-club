import Clip from "@/app/components/Clip";
import ClipGrid from "@/app/components/ClipGrid";
import { sql } from "@vercel/postgres";
import React from "react";

type Props = {
  params: {
    game: string;
  };
};

const page = async (props: Props) => {
  let game = "";
  if (props.params.game === "ow2") {
    game = "overwatch2";
  }

  const { rows } =
    await sql`SELECT * from CLIPS where game = ${game} ORDER BY id ASC`;
  // console.log(rows);
  return (
    <>
      <div className="text-center">{game}</div>
      <ClipGrid clips={rows} game={game} />
    </>
  );
};

export default page;
