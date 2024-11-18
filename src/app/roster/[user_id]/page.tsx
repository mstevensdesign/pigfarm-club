"use client";
import React from "react";
import { useParams } from "next/navigation";
import Loader from "@/app/components/Loader";
import User from "@/app/components/User";
import { useQuery } from "@tanstack/react-query";
import Clip from "@/app/components/Clip";

const UserPage = () => {
  const params = useParams();
  const user_id = params?.user_id ? Number(params.user_id) : null;

  const {
    data: user,
    isLoading: userLoading,
    error: userError,
  } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("/api/users/" + user_id);
      const data = await response.json();
      return data;
    },
  });

  const {
    data: clips,
    isLoading: clipsLoading,
    error: clipsError,
  } = useQuery({
    queryKey: ["clips"],
    queryFn: async () => {
      const response = await fetch("/api/clips?user_id=" + user_id);
      const data = await response.json();
      return data;
    },
  });

  console.log("BALLS", user, clips);
  return (
    <div>
      {userLoading ? (
        <Loader />
      ) : (
        <>
          <User user={user} />
          <Tabs />
          <Divider />
          <div className="grid grid-cols-1 gap-x-2 gap-y-4 pb-5 md:grid-cols-2 md:px-6 xl:grid-cols-3">
            {clipsLoading ? (
              <Loader />
            ) : (
              clips.map((clip: any) => (
                <React.Fragment key={clip.id}>
                  {/* Use Fragment to avoid adding extra div */}
                  <Clip
                    url={clip.url}
                    title={clip.title}
                    description={clip.description}
                    date={clip.date}
                    game={clip.game_title}
                    author={clip.user_display_name}
                    profile_url={clip.user_profile_url}
                    user_id={clip.user_id}
                    className=""
                    controls
                  />
                </React.Fragment>
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default UserPage;

const Divider = () => {
  return (
    <div className="mx-auto p-5">
      <hr className="border-gray-500" />
    </div>
  );
};

const Tabs = () => {
  return (
    <div className="mb-2 flex justify-center gap-20 text-black">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
        />
      </svg>
    </div>
  );
};
