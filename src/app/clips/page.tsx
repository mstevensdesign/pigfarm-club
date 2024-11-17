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
          {Array.from({ length: 6 }).map((_, index) => (
            <React.Fragment key={index}>
              <Skeleton />
            </React.Fragment>
          ))}

          {/* {data && data.map((clip: any) => (
            <React.Fragment key={clip.id}>
              <Skeleton />
            </React.Fragment>
          ))} */}
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
      <div className="grid grid-cols-1 gap-x-2 gap-y-4 pb-5 md:grid-cols-2 md:px-6 xl:grid-cols-3">
        {data.map((clip: any) => (
          <React.Fragment key={clip.id}>
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

const Skeleton = () => {
  return (
    <div
      role="status"
      className="max-w-xl animate-pulse rounded border border-gray-200 p-4 shadow md:p-6 dark:border-gray-700"
    >
      <div className="mb-4 flex h-48 items-center justify-center rounded bg-gray-300 dark:bg-gray-700">
        <svg
          className="h-10 w-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
          <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
        </svg>
      </div>
      <div className="mb-4 h-2.5 w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mb-2.5 h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="h-2 rounded-full bg-gray-200 dark:bg-gray-700"></div>
      <div className="mt-4 flex justify-between">
        <div>
          <div className="mb-2 h-2.5 w-32 rounded-full bg-gray-200 dark:bg-gray-700"></div>
          <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-pink-700"></div>
        </div>
        <svg
          className="me-3 h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
