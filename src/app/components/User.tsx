import React, { useEffect, useState } from "react";
import { getUserById } from "../utils/utils";

type Props = {
  user_id: number;
};

const User = (props: Props) => {
  return (
    <div>
      <h1>USER</h1>
    </div>
  );
};

export default User;
