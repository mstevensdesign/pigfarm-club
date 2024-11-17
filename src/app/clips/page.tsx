"use client";

import React from "react";
import ClipGrid from "../components/ClipGrid";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import FilterModal from "../components/FilterModal";
import Loader from "../components/Loader";
import { useQuery } from "@tanstack/react-query";
import Clip from "../components/Clip";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

type Props = {};

const ClipsPage = (props: Props) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["clips"],
    queryFn: async () => {
      const response = await fetch("/api/clips");
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
      <Container>
        <SearchContainer>
          <SearchInput />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <FilterButton clips={data} />
        </SearchContainer>
      </Container>
      {/* <ClipGrid clips={data} /> */}
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 pb-5 md:grid-cols-2 md:px-6 xl:grid-cols-3">
        {data.map((clip: any) => (
          <React.Fragment key={clip.id}>
            {/* Use Fragment to avoid adding extra div */}
            <Clip
              url={clip.url}
              title={clip.title}
              description={clip.description}
              date={clip.date}
              author={clip.user_display_name}
              game={clip.game_title}
              profile_url={clip.user_profile_url}
              user_id={clip.user_id}
              className=""
              controls
            />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default ClipsPage;

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="mb-4 mt-1 flex justify-center px-6">{children}</div>
    </>
  );
};

const SearchContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="relative w-full max-w-md">{children}</div>
    </>
  );
};

const SearchInput = () => {
  return (
    <>
      <input
        type="text"
        className="w-full rounded-md border p-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-slate-500"
        placeholder="Search clips..."
      />
    </>
  );
};

const FilterButton = (clips: any) => {
  return (
    <>
      <button className="absolute right-3 top-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-slate-500">
        {/* Filter */}
        <FilterModal clips={clips} />
      </button>
    </>
  );
};
