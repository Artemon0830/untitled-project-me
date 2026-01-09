

export interface IUserWithTokens {
    user: IUser;
    tokens: ITokens;
}
export interface IUser {
    _id: string;
    userName: string;
    email: string;
    age: number;
    role: string;
    isVerified: boolean;
    isDeleted: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface ITokens {
    accessToken: string;
    refreshToken: string;
}
export interface ISignInData {
    email:string;
    password:string;
}
export interface ISignUpData  {
    userName:string;
    age:number;
    email:string;
    password:string;
    phone?:string;
}
