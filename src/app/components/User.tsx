import React from "react";
import { getUserById } from "../utils/utils";

type Props = {
  user_id: number;
};

const User = async (props: Props) => {
  const user = await getUserById(props.user_id);
  console.log(user);
  return (
    <div>
      <h1>USER</h1>
      <p>{props.user_id}</p>
    </div>
  );
};

export default User;
