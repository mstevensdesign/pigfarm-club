"use client";

import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import User from "@/app/components/User";
import { Londrina_Solid } from "next/font/google";
import ClipGrid from "@/app/components/ClipGrid";
const londrina = Londrina_Solid({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

type Props = {
  title: string;
};

const UserPage = (props: Props) => {
  const params = useParams();
  const user_id = params?.user_id ? Number(params.user_id) : null;

  const [data, setData] = useState([]);
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
  console.log(data);
  return (
    <div className="mx-auto max-w-2xl">
      <Title title="Member Page" />
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorComponent error={error} />
      ) : (
        <User user={data} />
      )}
    </div>
  );
  // return (
  //   <div className="grid h-[calc(100vh-74px)] place-content-center">
  //     {loading ? (
  //       <p>Loading...</p>
  //     ) : error ? (
  //       <p>Error: {error}</p>
  //     ) : (
  //       <User user={data} />
  //     )}
  //   </div>
  // );
};

export default UserPage;

const Title = (props: Props) => {
  return (
    <div className={`text-h4 ${londrina.className} text-center text-green`}>
      {props.title}
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
