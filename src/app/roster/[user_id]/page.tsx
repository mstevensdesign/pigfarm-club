"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import User from "@/app/components/User";

type Props = {};

const UserPage = (props: Props) => {
  const params = useParams();
  const user_id = params?.user_id ? Number(params.user_id) : null;

  return (
    <div className="grid h-[calc(100vh-74px)] place-content-center">
      <User user_id={user_id} />
    </div>
  );
};

export default UserPage;
