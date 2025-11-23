import axios, {AxiosResponse} from "axios";
import {IUserInterface} from "../models/IUser-interface";

const axiosInstance=axios.create({
    baseURL: '/api',
})

const getAllUsers=():Promise<AxiosResponse<IUserInterface[]>> =>{
    return axiosInstance.get('/users')
}
const getUser=(userId:number):Promise<AxiosResponse<IUserInterface>> =>{
    return axiosInstance.get('/users/'+ userId)
}


export {getAllUsers,getUser}