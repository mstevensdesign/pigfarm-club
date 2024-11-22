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
      <RosterTitle />
      <RosterCardGrid>
        {data.map((person: TUser) => (
          <>
            <RosterCard key={person.id} person={person} />
            <RosterCard key={person.id} person={person} />
            <RosterCard key={person.id} person={person} />
            <RosterCard key={person.id} person={person} />
            <RosterCard key={person.id} person={person} />
          </>
        ))}
      </RosterCardGrid>
    </>
  );
};

const RosterTitle = () => {
  return <h4 className="text-center">Our Team</h4>;
};

const RosterCardGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <ul
      role="list"
      className="mx-5 flex flex-col items-center justify-center gap-5 lg:flex-row lg:flex-wrap lg:justify-center lg:gap-10"
    >
      {children}
    </ul>
  );
};

const RosterCard = (
  { person }: { person: TUser },
  { key }: { key: number },
) => {
  return (
    <li key={key} className="group mb-5">
      <Link href={`/roster/${person.id}`}>
        <div className="relative h-[400px] w-[300px] transform overflow-hidden rounded-lg bg-pink-400 transition-transform duration-300 group-hover:scale-105">
          <Image
            alt={person.first_name}
            src={person.profile_url}
            className="object-cover"
            layout="fill"
          />
          <div className="absolute inset-0 bottom-0 bg-black opacity-25 transition-all duration-300 group-hover:opacity-0"></div>
          <div className="absolute bottom-0 flex w-full flex-col justify-end bg-black bg-opacity-55 text-white">
            <div className="py-3 text-center">{person.display_name}</div>
          </div>
          {/* <div className="absolute bottom-0 flex w-full flex-col bg-black bg-opacity-55 text-white">
            <div className="self-center py-2">{person.display_name}</div>
          </div> */}
        </div>
      </Link>
    </li>
  );
};

export default Roster;
