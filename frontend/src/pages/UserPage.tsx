import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IUserInterface } from "../models/IUser-interface";
import { usersService } from "../services/user.service.api";

const UserPage = () => {
    const { userId } = useParams<{ userId: string }>();
    const [user, setUser] = useState<IUserInterface | null>(null);

    useEffect(() => {
        if (!userId) return;

        usersService.getUser(userId).then(res => setUser(res.data));
    }, [userId]);

    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>ID: {user._id}</p>
        </div>
    );
};

export default UserPage;

