import { sql } from "@vercel/postgres";

export default async function getClips(game: string) {
  const { rows } =
    await sql`SELECT * from CLIPS where game = ${game} ORDER BY id ASC`;
  return rows;
}
