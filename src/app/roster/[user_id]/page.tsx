"use client";

import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import User from "@/app/components/User";
import { Londrina_Solid } from "next/font/google";
import ClipGrid from "@/app/components/ClipGrid";
import { TUser } from "@/app/utils/types";
import Clip from "@/app/components/Clip";

const londrina = Londrina_Solid({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Props = {};

const UserPage = (props: Props) => {
  const params = useParams();
  const user_id = params?.user_id ? Number(params.user_id) : null;

  const [data, setData] = useState<TUser>({} as TUser);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchData = async () => {
      try {
        const response = await fetch("/api/users/" + user_id);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = await response.json();
        setData(result[0]);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    fetchData();
  }, []); // Empty dependency array means this runs once after the initial render
  console.log("BALLS", data);
  return (
    <div className="mx-auto max-w-2xl">
      <Title />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <>
          <User user={data} />
          <Clips user_id={data.id} />
        </>
      )}
    </div>
  );
};

export default UserPage;

const Clips = (props: { user_id: number }) => {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    console.log("Fetching clips for user", props.user_id);
    const fetchData = async () => {
      try {
        const response = await fetch("/api/clips?user_id=" + props.user_id);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  console.log("CLIPS", data);
  return (
    <>
      <div className="mx-auto max-w-2xl">
        {loading ? (
          <Loader />
        ) : error ? (
          <ErrorComponent error={error} />
        ) : (
          <>
            {data.map((clip) => (
              <React.Fragment key={clip.id}>
                {/* Use Fragment to avoid adding extra div */}
                <Clip
                  url={clip.url}
                  title={clip.title}
                  description={clip.description}
                  date={clip.date}
                  author={clip.display_name}
                  game={clip.title}
                  // profile_url={profile_url}
                  // user_id={user_id}
                  className=""
                  controls
                />
              </React.Fragment>
            ))}
          </>
        )}
      </div>
    </>
  );
};

const Title = () => {
  return (
    <div className={`text-h4 ${londrina.className} text-center text-green`}>
      Member Page
    </div>
  );
};

const Loader = () => {
  return (
    <div className="grid h-[calc(100vh-400px)] place-content-center">
      <div className="border-green-500 h-32 w-32 animate-spin rounded-full border-b-2 border-t-2"></div>
    </div>
  );
};

const ErrorComponent = (props: { error: string }) => {
  return <p>Error: {props.error}</p>;
};
