import React, {FC} from 'react';
import {IUser} from "../models/IUserWithTokens";



interface IProps {
  user:IUser ,clickHandler:(_id:string)=>void;
}
const UserComponent:FC<IProps> = ({user,clickHandler}) => {
    return (
        <div>
            <ul>
                <li>email:{user.email}</li>
            </ul>
            <p>name:{user.userName}</p>
            <p>userId:{user._id}</p>
            <button onClick={()=>clickHandler(`${user._id}`)}>details</button>
        </div>
    );
};

export default UserComponent;