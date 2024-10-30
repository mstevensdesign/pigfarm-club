import { sql } from "@vercel/postgres";
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export async function GET() {
  const data = { user_id: 1 };
  const { rows } = await sql`SELECT * from CLIPS ORDER BY id ASC`;
  return Response.json(rows);
}
