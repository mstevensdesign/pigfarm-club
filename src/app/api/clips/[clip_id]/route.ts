import { sql } from "@vercel/postgres";

export async function GET(
  request: Request,
  { params }: { params: { clip_id: string } },
) {
  const clip_id = params.clip_id;
  // const { rows } =
  //   await sql`SELECT * FROM clips WHERE id = ${clip_id} ORDER BY id ASC`;
  const { rows: clipsByClipID } = await sql`SELECT clips.url as url,
clips.title as title,
clips.description as description,
clips.date as date,
clips.id as id,
games.title as game_title,
users.display_name as user_display_name,
users.id as user_id,
users.profile_url as user_profile_url
FROM clips
JOIN games ON clips.game_id = games.id
JOIN users ON clips.user_id = users.id
WHERE clips.id = ${clip_id}
ORDER BY clips.id ASC`;
  const singleRow = clipsByClipID[0];
  return Response.json(singleRow);
}
