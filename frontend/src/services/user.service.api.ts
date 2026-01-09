import axios, {AxiosResponse} from "axios";
import {IProductArticle, IProductArticleWithUser, IProductCreateArticle} from "../models/IArticle-interface";
import {retriveLocalStorage} from "../helpers/helpers";
import {IUser, IUserWithTokens} from "../models/IUserWithTokens";

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

        async getAllUsers(): Promise<AxiosResponse<IUser[]>> {
            return await axiosInstance.get('/users')
        },
        async getUser(userId: string): Promise<AxiosResponse<IUser>> {
            return await axiosInstance.get('/users/'+userId)
        }

};
const articleService = {
    async getAllArticles(): Promise<AxiosResponse<IProductArticle[]>> {
        return await axiosInstance.get('/articles');

    },
    async getArticle(articleId: string): Promise<AxiosResponse<IProductArticle>> {
        return await axiosInstance.get('/articles/' + articleId);
    },
    async createArticle(data: IProductCreateArticle): Promise<IProductArticleWithUser> {
        try {
            const response = await axiosInstance.post<IProductArticleWithUser>(
                '/articles/create',
                data
            )
            return response.data
        } catch (error) {
            console.error(error)
            throw error
        }
    }

};






export {usersService,articleService}





