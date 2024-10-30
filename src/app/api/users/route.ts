import { sql } from "@vercel/postgres";
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export async function GET() {
  const { rows } = await sql`SELECT * FROM users WHERE id = 1 ORDER BY id ASC`;
  return Response.json(rows);
}
