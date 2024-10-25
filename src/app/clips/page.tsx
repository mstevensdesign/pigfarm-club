import React from "react";
import ClipGrid from "../components/ClipGrid";
import { getClips, getClipsByTag } from "../utils/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

type Props = {};

const ClipsPage = async (props: Props) => {
  const clips = await getClips();

  return (
    <div className="">
      <div className="mb-4 flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="w-full rounded-md border p-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search clips..."
          />
          <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
        <button className="ml-2 rounded-md bg-blue-500 p-2 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Filter
        </button>
      </div>
      <ClipGrid clips={clips} title="Overwatch 2" />
      <ClipGrid clips={clips} title="Castle Crashers" />
    </div>
  );
};

export default ClipsPage;
