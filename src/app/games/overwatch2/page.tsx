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
      <h2 className="my-3 text-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Overwatch 2
      </h2>
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 p-2 lg:grid-cols-2 xl:grid-cols-3">
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
