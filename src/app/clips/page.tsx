"use client";

import React from "react";
import ClipGrid from "../components/ClipGrid";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import FilterModal from "../components/FilterModal";
import Loader from "../components/Loader";
import { useQuery } from "@tanstack/react-query";
import Clip from "../components/Clip";
import ClipSkeleton from "../components/ClipSkeleton";
import { TClip } from "../utils/types";

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

  if (isLoading) {
    return (
      <>
        <Container>
          <SearchContainer>
            <SearchInput />
            <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <FilterButton clips={data} />
          </SearchContainer>
        </Container>
        <div className="grid grid-cols-1 gap-x-2 gap-y-4 pb-5 md:grid-cols-2 md:px-6 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <React.Fragment key={index}>
              <ClipSkeleton />
            </React.Fragment>
          ))}
        </div>
      </>
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
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 pb-5 md:grid-cols-2 md:px-6 xl:grid-cols-3">
        {data.map((clip: TClip) => (
          <Clip
            key={clip.id}
            id={clip.id}
            url={clip.url}
            title={clip.title}
            description={clip.description}
            date={clip.date}
            user_display_name={clip.user_display_name}
            game_title={clip.game_title}
            user_profile_url={clip.user_profile_url}
            user_id={clip.user_id}
          />
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
