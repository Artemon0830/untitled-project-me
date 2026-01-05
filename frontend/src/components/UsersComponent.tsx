import React, { useEffect, useState } from 'react';
import { IUserInterface } from "../models/IUser-interface";
import { usersService } from "../services/user.service.api";
import UserComponent from "./UserComponent";
import { useNavigate } from "react-router-dom";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserInterface[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        usersService.getAllUsers().then(res => setUsers(res.data));
    }, []);

    const clickHandler = (id: string) => {
        navigate(`/users/${id}`);
    };

    return (
        <div>
            <h1>Users:</h1>
            {users.map(user => (
                <UserComponent
                    key={user._id}
                    user={user}
                    clickHandler={clickHandler}
                />
            ))}
        </div>
    );
};

export default UsersComponent;
