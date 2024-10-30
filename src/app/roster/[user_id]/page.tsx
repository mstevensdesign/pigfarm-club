"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import User from "@/app/components/User";
import { getUserById } from "@/app/utils/utils";

type Props = {};

const UserPage = (props: Props) => {
  const user_id = Number(useParams().user_id);
  console.log(user_id);

  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const userData = await getUserById(1);
      console.log("userData", userData);
      // setUser(userData);
    };

    fetchUser();
  }, []);

  return (
    <div className="grid h-[calc(100vh-74px)] place-content-center">
      {/* <User user_id={user_id} /> */}
    </div>
  );
};

export default UserPage;
