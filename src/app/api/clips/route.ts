import { sql } from "@vercel/postgres";

export async function GET() {
  const data = { user_id: 1 };
  const { rows } = await sql`SELECT * from CLIPS ORDER BY id ASC`;
  return Response.json(rows);
}
