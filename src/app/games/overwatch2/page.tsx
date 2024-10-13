import Clip from "@/app/components/Clip";
import FilterModal from "@/app/components/FilterModal";
import { sql } from "@vercel/postgres";
import React from "react";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type Props = {};

const Overwatch2 = async (props: Props) => {
  const { rows } =
    await sql`SELECT * from CLIPS where game = 'ow2' ORDER BY id ASC`;

  return (
    <>
      <div className="mx-6 mt-6 flex justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Overwatch 2
        </h2>
        <FilterModal />
      </div>
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 p-2 pb-5 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((row) => (
          <React.Fragment key={row.id}>
            {/* Use Fragment to avoid adding extra div */}
            <Clip
              url={row.url}
              title={row.title}
              description={row.description}
              date={row.date}
              author={row.author}
              className="mb-1 px-2"
              controls
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default Overwatch2;
