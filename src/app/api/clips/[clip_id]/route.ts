import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { clip_id: string } },
) {
  const clip_id = params.clip_id;
  const { rows } =
    await sql`SELECT * FROM clips WHERE id = ${clip_id} ORDER BY id ASC`;
  return Response.json(rows);
}
