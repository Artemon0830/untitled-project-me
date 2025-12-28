import axios, {AxiosResponse} from "axios";
import {IUserInterface} from "../models/IUser-interface";
import { IProductArticle } from "../models/IArticle-interface";

const axiosInstance=axios.create({
    baseURL: '/api',
})

const getAllUsers=():Promise<AxiosResponse<IUserInterface[]>> =>{
    return axiosInstance.get('/users')
}
const getUser= async(userId:string):Promise<AxiosResponse<IUserInterface>> =>{
    const response= await axiosInstance.get('/users/'+ userId)
    return response.data
} 
const getAllArticles=():Promise<AxiosResponse<IProductArticle[]>>=>{
    return axiosInstance.get('/articles')
}
const getArticle=(articleId:number):Promise<AxiosResponse<IProductArticle>>=>{
    return axiosInstance.get('/articles'+articleId)
}

export {getAllUsers,getUser,getAllArticles,getArticle}