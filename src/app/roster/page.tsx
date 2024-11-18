"use client";

import React from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import Loader from "../components/Loader";
import { TUser } from "../utils/types";

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
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8">
            We are a bunch of nerds who love gaming and building cool stuff.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {data.map((person: TUser) => (
            <li key={person.display_name}>
              <Link href={`/roster/${person.id}`}>
                <Image
                  alt=""
                  src={person.profile_url}
                  className="aspect-[14/13] w-full rounded-2xl object-cover contrast-125 filter transition-transform duration-300 hover:scale-105 hover:contrast-100"
                  width={200}
                  height={200}
                />
              </Link>
              <h3 className="mt-2 text-lg font-semibold leading-8 tracking-tight">
                {person.first_name} {person.last_name}
              </h3>
              <p className="">{person.dob}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Roster;
