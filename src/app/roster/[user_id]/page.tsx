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
  console.log("USER ID", user_id);

  const { data, isLoading, error } = useQuery({
    queryKey: ["roster"],
    queryFn: async () => {
      const response = await fetch("/api/users/" + user_id);
      const data = await response.json();
      return data;
    },
  });

  console.log("data", data);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <User user={data} />
    </div>
  );
};

export default UserPage;
