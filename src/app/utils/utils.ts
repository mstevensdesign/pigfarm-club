import { sql } from "@vercel/postgres";

export async function getClips(game: string) {
  const { rows } =
    await sql`SELECT * from CLIPS where game = ${game} ORDER BY id ASC`;
  return rows;
}

export async function getClipsByTag(game: string, tags: string[]) {
  const { rows } =
    await sql`SELECT * FROM clips WHERE game = ${game} AND 'walkblind' = ANY(players)`;
  return rows;
}
