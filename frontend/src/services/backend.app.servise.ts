import axios from "axios"
import {ISignInData, ISignUpData, IUserWithTokens} from "../models/IUserWithTokens";

const axiosInstance = axios.create({
    baseURL:'/api',

});

const signIn = async (
    data: ISignInData
): Promise<IUserWithTokens> => {
    try {
        const response = await axiosInstance.post<IUserWithTokens>(
            "/auth/sign-in",
            data
        );

        localStorage.setItem("user", JSON.stringify(response.data));
        return response.data;

    } catch (e) {
        console.error(e);
        throw e; // ← REQUIRED
    }
};

const signUp = async (data: ISignUpData): Promise<IUserWithTokens> => {
    const { data: user } = await axiosInstance.post<IUserWithTokens>(
        '/auth/sign-up',
        data
    );

    localStorage.setItem('user', JSON.stringify(user));
    return user;
};




export {signIn,signUp}