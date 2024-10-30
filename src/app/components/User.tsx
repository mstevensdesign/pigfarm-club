import React, { useEffect, useState } from "react";
import { getUserById } from "../utils/utils";

type Props = {
  user_id: number | null;
};

const User = (props: Props) => {
  return (
    <div>
      <p>User ID: {props.user_id}</p>
    </div>
  );
};

export default User;
