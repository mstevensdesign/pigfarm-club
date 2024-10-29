import { sql } from "@vercel/postgres";
export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

export async function getClips() {
  const { rows } = await sql`SELECT * from CLIPS ORDER BY id ASC`;
  return rows;
}
// export async function getClipsByGame(game_id: number) {
//   const { rows } =
//     await sql`SELECT * from CLIPS where game_id = ${game_id} ORDER BY id ASC`;
//   return rows;
// }

export async function getClipsByGame(game_id: number) {
  const { rows } = await sql`SELECT clips.url as clip_url,
clips.title as clip_title,
clips.description as clip_description,
clips.date as clip_date,
clips.id as clip_id,
games.title as game_title,
users.display_name as user_display_name,
users.id as user_id,
users.profile_url as profile_url
FROM clips
JOIN games ON clips.game_id = games.id
JOIN users ON clips.user_id = users.id
WHERE clips.game_id = ${game_id}
ORDER BY clips.id ASC`;
  return rows;
}

export async function getClipsByTag(game: string, tags: string[]) {
  const { rows } =
    await sql`SELECT * FROM clips WHERE game = ${game} AND 'walkblind' = ANY(players)`;
  return rows;
}
