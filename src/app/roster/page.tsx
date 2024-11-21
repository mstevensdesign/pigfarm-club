"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Loader from "../components/Loader";
import { TUser } from "../utils/types";
import ImageSkeleton from "../components/ImageSkeleton";

const Roster = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["roster"],
    queryFn: async () => {
      const response = await fetch("/api/users");
      const data = await response.json();
      return data;
    },
  });

  console.log(data);

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-74px)] items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h4 className="text-center">Our Team</h4>
      <ul role="list" className="">
        {data.map((person: TUser) => (
          <li key={person.id} className="group mb-20 flex">
            <Link href={`/roster/${person.id}`}>
              <div className="relative bg-pink-400">
                <Image
                  alt={person.first_name}
                  src={person.profile_url}
                  className=""
                  width={200}
                  height={200}
                />
                <div className="absolute bottom-0 flex w-full flex-col bg-black bg-opacity-55 text-white">
                  <div className="self-center">{person.display_name}</div>
                  {/* <div className="h-5 w-1/2 self-end rounded-md bg-white"></div> */}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Roster;
