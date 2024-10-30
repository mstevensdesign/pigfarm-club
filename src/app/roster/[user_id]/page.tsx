"use client";

import { useParams } from "next/navigation";
import React, { use, useEffect, useState } from "react";
import User from "@/app/components/User";

type Props = {};

const UserPage = (props: Props) => {
  const params = useParams();
  const user_id = params?.user_id ? Number(params.user_id) : null;

  const [user, setUser] = useState(null);

  useEffect(() => {
    if (user_id) {
      fetch(`/api/users/${user_id}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [user_id]);

  console.log(user);
  return (
    <div className="grid h-[calc(100vh-74px)] place-content-center">
      <User user={user} />
    </div>
  );
};

export default UserPage;
