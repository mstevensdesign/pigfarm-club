import Clip from "@/app/components/Clip";
import { sql } from "@vercel/postgres";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type Props = {};

const Overwatch2 = async (props: Props) => {
  const { rows } =
    await sql`SELECT * from CLIPS where game = 'overwatch2' ORDER BY id ASC`;

  return (
    <>
      <div className="mx-6 mt-6 flex justify-between">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
          Overwatch 2
        </h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
          />
        </svg>
      </div>
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 p-2 pb-5 md:grid-cols-2 xl:grid-cols-3">
        {rows.map((row) => (
          <Clip
            key={row.id}
            url={row.url}
            title={row.title}
            description={row.description}
            date={row.date}
            author={row.author}
            className="mb-1 px-2"
          />
        ))}
        {/* <Clip
          url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
          title="Rip BANX"
          description="This is a description"
          date="2021-10-10"
          author="@walk"
          className="mb-1 px-2"
        />
        <Clip
          url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
          title="Rip BANX"
          description="This is a description"
          date="2021-10-10"
          author="@walk"
          className="mb-1 px-2"
        />
        <Clip
          url="https://www.youtube.com/watch?v=Smoz9J3ZSts"
          title="Rip BANX"
          description="This is a description"
          date="2021-10-10"
          author="@walk"
          className="mb-1 px-2"
        /> */}
      </div>
    </>
  );
};

export default Overwatch2;
