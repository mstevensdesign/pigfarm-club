import Image from "next/image";
import React from "react";

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
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-white">
            We're a bunch of nerds who love gaming and building cool stuff.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
        >
          {people.map((person) => (
            <li key={person.name}>
              <Image
                alt=""
                src={person.imageUrl}
                className="aspect-[14/13] w-full rounded-2xl object-cover"
                width={200}
                height={200}
              />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">
                {person.name}
              </h3>
              <p className="text-base leading-7 text-white">{person.role}</p>
              <p className="text-sm leading-6 text-white">{person.location}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    // <div className="flex h-[calc(100vh-74px)] w-screen flex-col items-center justify-center">
    //   <h1 className="text-5xl font-bold text-green-500">Roster</h1>
    // </div>
  );
};

export default Roster;
