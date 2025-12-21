import {IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";
import {ApiError} from "../errors/api-error";
import {ITokenPayload} from "../interfaces/token.interface";


class ArticleService {
    async getArticles(): Promise<IUser[]> {
        return  await userRepository.getUsers();
    }
    async getArticleById(articleId:string,jwtPayload:ITokenPayload):Promise<IUser> {
        return await userRepository.getUserById(articleId);
    }
    async updateArticle(articleId:string, dto:IUser,jwtPayload:ITokenPayload):Promise<IUser> {
        if(!dto.name || dto.name.length >3){
            throw new ApiError("Name is required and should be at least 3 characters long",404)
        }
        if(!dto.email || !dto.email.includes("@")){
            throw new ApiError("Email is required and should be valid", 400);
        }
        if (!dto.password || dto.password.length <6){
            throw new ApiError("Password is required and should be at least 6 characters long",400)
        }
        return await userRepository.updateUserById(articleId, dto,);
    }
    async deleteArticle(articleId:string,jwtPayload:ITokenPayload):Promise<void> {
        return await userRepository.deleteUserById(articleId);
    }
}
export const articleService = new ArticleService();