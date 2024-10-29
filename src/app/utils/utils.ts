import { sql } from "@vercel/postgres";

export async function getClips() {
  const { rows } = await sql`SELECT * from CLIPS ORDER BY id ASC`;
  return rows;
}
export async function getClipsByGame(game_id: number) {
  const { rows } =
    await sql`SELECT * from CLIPS where game_id = ${game_id} ORDER BY id ASC`;
  return rows;
}

export async function getClipsByTag(game: string, tags: string[]) {
  const { rows } =
    await sql`SELECT * FROM clips WHERE game = ${game} AND 'walkblind' = ANY(players)`;
  return rows;
}
