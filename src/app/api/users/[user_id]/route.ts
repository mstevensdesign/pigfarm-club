import { sql } from "@vercel/postgres";
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export async function GET(
  request: Request,
  { params }: { params: { user_id: string } },
) {
  const user_id = params.user_id;
  const { rows } =
    await sql`SELECT * FROM users WHERE id = ${user_id} ORDER BY id ASC LIMIT 1`;
  const singleRow = rows[0];
  return Response.json(singleRow);
}
