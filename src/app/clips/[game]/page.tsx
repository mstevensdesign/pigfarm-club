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
  const { game } = props.params;

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