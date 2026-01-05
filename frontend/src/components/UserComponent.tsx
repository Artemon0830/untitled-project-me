import React, {FC} from 'react';
import {IUserInterface} from "../models/IUser-interface";


interface IProps {
  user:IUserInterface ,clickHandler:(_id:string)=>void;
}
const UserComponent:FC<IProps> = ({user,clickHandler}) => {
    return (
        <div>
            <ul>
                <li>email:{user.email}</li>
            </ul>
            <p>name:{user.name}</p>
            <p>userId:{user._id}</p>
            <button onClick={()=>clickHandler(`${user._id}`)}>details</button>
        </div>
    );
};

export default UserComponent;