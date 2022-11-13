import React from "react";
import { users } from "../../../utils/helpers/demoUsers";

type Props = {
  username?: string;
  imgUrl?: string;
  userAccount?: string;
};

const UserDetailsCard = ({ id }: { id?: string | Array<string> }) => {
  const selectedUser = users.find((us) => us.id.toString() === id);
  return <div>{selectedUser?.userName}</div>;
};

export default UserDetailsCard;
