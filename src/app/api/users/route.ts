import { sql } from "@vercel/postgres";

export const dynamic = "force-dynamic";

export async function GET() {
  const { rows } = await sql`SELECT * FROM users ORDER BY id ASC`;
  return Response.json(rows);
}
