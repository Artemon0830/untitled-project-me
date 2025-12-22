import React, {FC} from 'react';
import {IUserInterface} from "../models/IUser-interface";


interface IProps {
  user:IUserInterface
}
const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <ul>
                <li>email:{user.email}</li>
            </ul>
            <p>name:{user.name}</p>
            <p>userId:{user._id}</p>
        </div>
    );
};

export default UserComponent;