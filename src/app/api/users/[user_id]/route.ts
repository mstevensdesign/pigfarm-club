import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { user_id: string } },
) {
  const user_id = params.user_id;
  const { rows } =
    await sql`SELECT * FROM users WHERE id = ${user_id} ORDER BY id ASC`;
  return Response.json(rows);
}
