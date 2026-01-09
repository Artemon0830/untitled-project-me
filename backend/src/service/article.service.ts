
import {IProductArticle, IProductCreateArticle} from "../interfaces/article.interface";
import {articleRepository} from "../repositories/article.repository";
import {ITokenPayload} from "../interfaces/token.interface";
import {IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";
import {ApiError} from "../errors/api-error";



class ArticleService {
    async create(dto: IProductCreateArticle, jwtPayload:ITokenPayload):Promise<{article:IProductArticle,user:IUser}> {
        const user =await userRepository.getUserById(jwtPayload.userId)
        if (!user){
            throw new ApiError("User not found",404)
        }
        console.log({...dto,_userId:user._id})
        const article= await articleRepository.create({...dto,_userId:user._id});
        return {article,user}
    }

    async getArticles():Promise<IProductArticle[]> {
        return articleRepository.findAll();
    }

    async getArticleById(articleId: string, jwtPayload: ITokenPayload) {
        const user = await userRepository.getUserById(jwtPayload.userId);
        if (!user) {
            throw new ApiError("User not found", 404);
        }

        const article = await articleRepository.findByIdAndUser(articleId,jwtPayload.userId);
        if (!article) {
            throw new ApiError("Article not found", 404);
        }
        return article;
    }

    async updateArticle(jwtPayload: ITokenPayload, articleId: string, dto: Partial<IProductArticle>) {
        const user = await userRepository.getUserById(jwtPayload.userId);
        if (!user) {
            throw new ApiError("User not found", 404);
        }

        const article = await articleRepository.update(user._id, articleId, dto);
        if (!article) {
            throw new ApiError("Article not found", 404);
        }

        return article;
    }


    async deleteArticle(articleId: string, jwtPayload:ITokenPayload) {
        const user =await userRepository.getUserById(jwtPayload.userId)
        if (!user){
            throw new ApiError("User not found",404)
        }
        return articleRepository.delete(articleId,user._id);
    }
}

export const articleService = new ArticleService();
