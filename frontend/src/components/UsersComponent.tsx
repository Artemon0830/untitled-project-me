import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent";
import {IUserInterface} from "../models/IUser-interface";
import {getAllUsers} from "../services/user.service.api";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUserInterface[]>([])
    const [userId, setUserId] = useState<IUserInterface>({} as IUserInterface)
    useEffect(() => {
       getAllUsers().then(value => setUsers([...value.data]))
    }, [])

    return (
        <div>
            <h1>Users:</h1>
            {users.map(user=><div><UserComponent user={user}/></div>)}
        </div>
    );
};

export default UsersComponent;