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
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        {data.map((person: TUser) => (
          <li key={person.id} className="group flex flex-col items-center">
            <Link href={`/roster/${person.id}`}>
              <div className="relative h-48 w-48 transform overflow-hidden rounded-lg bg-pink-400 transition-transform duration-300 group-hover:scale-105 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
                <Image
                  alt={person.first_name}
                  src={person.profile_url}
                  className="object-cover"
                  layout="fill"
                />
                <div className="absolute bottom-0 flex w-full flex-col bg-black bg-opacity-55 text-white">
                  <div className="self-center py-2">{person.display_name}</div>
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
