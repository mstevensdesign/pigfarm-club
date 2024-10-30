"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import User from "@/app/components/User";

type Props = {};

const UserPage = (props: Props) => {
  // const user_id = Number(useParams().user_id);
  // console.log(user_id);

  return (
    <div className="grid h-[calc(100vh-74px)] place-content-center">
      <User user_id={2} />
    </div>
  );
};

export default UserPage;
