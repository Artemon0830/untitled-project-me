import {RoleEnum} from "./enums/role.enum";

export interface IUserWithTokens {
    _id?:number;
    name:string;
    age:number;
    email:string;
    password:string;
    phone?:string;
    role:RoleEnum;
    isVerified:boolean;
    isDeleted:boolean;
    createdAt?:Date;
    updatedAt?:Date;
    accessToken:string;
    refreshToken:string;
}
export interface ISignInData {
    email:string;
    password:string;
}
export interface ISignUpData  {
    name:string;
    age:number;
    email:string;
    password:string;
    phone?:string;
}
