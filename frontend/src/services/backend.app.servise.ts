import axios from "axios"
import {ISignInData, ISignUpData, IUserWithTokens} from "../models/IUserWithTokens";

const axiosInstance = axios.create({
    baseURL:'http://localhost:8889',

});

const signIn = async (data:ISignInData)=>{
    try {
        const userWithToken = await axiosInstance.post<IUserWithTokens>('/auth/sign-in', data, {});
        console.log(userWithToken);
        localStorage.setItem('user', JSON.stringify(userWithToken.data));
        return userWithToken.data;
    } catch (e) {
        console.log(e);
    }
}
const signUp = async (data:ISignUpData)=>{
    try {
        const userWithToken = await axiosInstance.post<IUserWithTokens>('/auth/sign-up', data, {});
        console.log(userWithToken);
        localStorage.setItem('user', JSON.stringify(userWithToken.data));
        return userWithToken.data;
    }catch (e){
        console.log(e);
    }
}

export {signIn,signUp}