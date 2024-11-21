"use client";

import Clip from "@/app/components/Clip";
import { TClip } from "@/app/utils/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const ClipDetailPage = () => {
  const params = useParams();
  const clip_id = params?.clip_id ? Number(params.clip_id) : null;

  const {
    data: clipData,
    isLoading: clipLoading,
    error: clipError,
  } = useQuery({
    queryKey: ["clip"],
    queryFn: async () => {
      const response = await fetch("/api/clips/" + clip_id);
      const data = await response.json();
      return data[0];
    },
  });

  console.log("Clip Data", clipData);

  return (
    <>
      {clipLoading ? (
        <div>Loading...</div>
      ) : clipError ? (
        <div>Error: {clipError.message}</div>
      ) : (
        <Clip
          key={clipData.id}
          id={clipData.id}
          url={clipData.url}
          title={clipData.title}
          description={clipData.description}
          date={clipData.date}
          user_display_name={clipData.user_display_name}
          game_title={clipData.game_title}
          user_profile_url={clipData.user_profile_url}
          user_id={clipData.user_id}
        />
      )}
    </>
  );
};
export default ClipDetailPage;
