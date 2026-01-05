import axios, {AxiosResponse} from "axios";
import {IUserInterface} from "../models/IUser-interface";
import {IProductArticle} from "../models/IArticle-interface";
import {retriveLocalStorage} from "../helpers/helpers";
import {IUserWithTokens} from "../models/IUserWithTokens";

const axiosInstance=axios.create({
    baseURL: '/api',
})
axiosInstance.interceptors.request.use(request=>{
 const stored = retriveLocalStorage<IUserWithTokens>('user');
 if(stored?.tokens?.accessToken){
    request.headers.Authorization = `Bearer ${stored.tokens.accessToken}`
 }
    return request
})

const usersService = {

        async getAllUsers(): Promise<AxiosResponse<IUserInterface[]>> {
            return await axiosInstance.get('/users')
        },
        async getUser(userId: string): Promise<AxiosResponse<IUserInterface>> {
            return await axiosInstance.get('/users/'+userId)
        }

};
const articleService ={
        async getAllArticles():Promise<AxiosResponse<IProductArticle[]>>{
            let {data} = await axiosInstance.get('/articles');
            return data
        },
        async getArticle(articleId:string):Promise<AxiosResponse<IProductArticle>> {
            let {data} = await axiosInstance.get('/articles'+articleId);
            return data
        }


}





export {usersService,articleService}





