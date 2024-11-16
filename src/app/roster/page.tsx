"use client";

import Image from "next/image";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { TUser } from "../utils/types";

type Props = {};

const people = [
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  {
    name: "walkblind",
    role: "Nerd",
    imageUrl: "/mike-profile.jpg",
    location: "Snow Hill, MD",
  },
  // More people...
];

const Roster = (props: Props) => {
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
    return <div>Loading...</div>;
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
              <Image
                alt=""
                src={person.profile_url}
                className="aspect-[14/13] w-full rounded-2xl object-cover transition-transform duration-300 hover:scale-105"
                width={200}
                height={200}
              />
              <h3 className="mt-2 text-lg font-semibold leading-8 tracking-tight">
                {person.first_name} {person.last_name}
              </h3>
              <p className="">{person.dob}</p>
              {/* <p className="">{person.description}</p> */}
            </li>
          ))}
        </ul>
      </div>
    </div>

    // <div className="py-24 sm:py-32">
    //   <div className="mx-auto max-w-7xl px-6 lg:px-8">
    //     <div className="mx-auto max-w-2xl lg:mx-0">
    //       <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
    //         Our Team
    //       </h2>
    //       <p className="mt-6 text-lg leading-8">
    //         We are a bunch of nerds who love gaming and building cool stuff.
    //       </p>
    //     </div>
    //     <ul
    //       role="list"
    //       className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
    //     >
    //       {people.map((person) => (
    //         <li key={person.name}>
    //           <Image
    //             alt=""
    //             src={person.imageUrl}
    //             className="aspect-[14/13] w-full rounded-2xl object-cover"
    //             width={200}
    //             height={200}
    //           />
    //           <h3 className="mt-2 text-lg font-semibold leading-8 tracking-tight">
    //             {person.name}
    //           </h3>
    //           <p className="">{person.role}</p>
    //           <p className="">{person.location}</p>
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    // </div>

    // <div className="flex h-[calc(100vh-74px)] w-screen flex-col items-center justify-center">
    //   <h1 className="text-5xl font-bold text-green-500">Roster</h1>
    // </div>
  );
};

export default Roster;
