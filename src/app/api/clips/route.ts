import { sql } from "@vercel/postgres";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  console.log(searchParams);
  const game_id = searchParams.get("game_id");
  // query is "hello" for /api/search?query=hello
  switch (searchParams.keys().next().value) {
    case "game_id":
      const { rows: clipsByGameID } = await sql`SELECT 
      clips.id as id,
      clips.url as url,
clips.title as title,
clips.description as description,
clips.date as date,
clips.tags as tags,
games.title as game_title,
users.display_name as user_display_name,
users.id as user_id,
users.profile_url as profile_url
FROM clips
JOIN games ON clips.game_id = games.id
JOIN users ON clips.user_id = users.id
WHERE clips.game_id = ${game_id}
ORDER BY clips.id ASC`;
      return Response.json(clipsByGameID);
      break;
    case "user_id":
      const user_id = searchParams.get("user_id");
      // const clipRows =
      //   await sql`SELECT * from CLIPS WHERE user_id = ${user_id} ORDER BY id ASC`;
      const { rows: clipsByUserID } = await sql`SELECT clips.url as url,
clips.title as title,
clips.description as description,
clips.date as date,
clips.id as id,
clips.tags as tags,
games.title as game_title,
users.display_name as user_display_name,
users.id as user_id,
users.profile_url as user_profile_url
FROM clips
JOIN games ON clips.game_id = games.id
JOIN users ON clips.user_id = users.id
WHERE clips.user_id = ${user_id}
ORDER BY clips.id ASC`;
      return Response.json(clipsByUserID);
    case "tags":
      const tags = searchParams.get("tags");
      // const clipRows =
      //   await sql`SELECT * from CLIPS WHERE user_id = ${user_id} ORDER BY id ASC`;
      const { rows: clipsByTags } = await sql`SELECT 
      clips.id as id,
      clips.url as url,
clips.title as title,
clips.description as description,
clips.date as date,
clips.players as players,
clips.tags as tags,
games.title as game_title,
users.display_name as user_display_name,
users.id as user_id,
users.profile_url as user_profile_url
FROM clips
JOIN games ON clips.game_id = games.id
JOIN users ON clips.user_id = users.id
  WHERE EXISTS (
    SELECT 1
    FROM UNNEST(clips.tags) AS tag_element
    WHERE tag_element ILIKE '%' || ${tags} || '%'
  )
ORDER BY clips.id ASC`;
      return Response.json(clipsByTags);

    default:
      const { rows: allClips } = await sql`SELECT
            clips.id as id,
            clips.title as title,
            clips.date as date,
            clips.description as description,
            clips.url as url,
      users.id as user_id,
      users.display_name as user_display_name,
      users.profile_url as user_profile_url,
      games.title as game_title
      FROM clips
      JOIN games ON clips.game_id = games.id
      JOIN users ON clips.user_id = users.id
      ORDER BY clips.id ASC`;
      return Response.json(allClips);
  }
}
