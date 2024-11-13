import React from "react";
import ClipGrid from "../components/ClipGrid";
import { getClips, getClipsByTag, getClipsByGame } from "../utils/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import FilterModal from "../components/FilterModal";

export const fetchCache = "force-no-store";
export const dynamic = "force-dynamic";

type Props = {};

const ClipsPage = async (props: Props) => {
  const clips = await getClipsByGame(1);
  console.log("FART: ", clips);

  return (
    <>
      <Container>
        <SearchContainer>
          <SearchInput />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          <FilterButton clips={clips} />
        </SearchContainer>
      </Container>
      <ClipGrid clips={clips} title="Overwatch 2" />
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
