"use client";

import { useParams } from "next/navigation";
import React from "react";

type Props = {};

const UserPage = (props: Props) => {
  const user_id = useParams().user_id;
  console.log(user_id);
  return (
    <div className="grid h-[calc(100vh-74px)] place-content-center">
      User Id: {user_id}
    </div>
  );
};

export default UserPage;
