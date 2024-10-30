"use client";

import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import User from "@/app/components/User";

type Props = {};

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
          throw new Error(`Error: ${response.statusText}`);
        }

        const result = await response.json();
        setData(result[0]);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError(String(err));
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
    <div className="grid h-[calc(100vh-74px)] place-content-center">
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <User user={data} />
      )}
    </div>
  );
};

export default UserPage;
