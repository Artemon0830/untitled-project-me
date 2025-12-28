import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IUserInterface } from "../models/IUser-interface";
import UserComponent from "../components/UserComponent";
import { getUser } from "../services/user.service.api";

const UserPage = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<IUserInterface | null>(null);

  useEffect(() => {
    if (!id) return;
     getUser(id).then(value =>setUser)

  }, [id]);

  if (!user) {
    return <div>Loading user...</div>;
  }

  return (
    <div>
      <UserComponent user={user}/>
    </div>
  );
};

export default UserPage;
