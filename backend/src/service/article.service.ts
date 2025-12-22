
import {IProductArticle} from "../interfaces/article.interface";
import {articleRepository} from "../repositories/article.repository";
import {ITokenPayload} from "../interfaces/token.interface";
import {IUser} from "../interfaces/user.interface";
import {userRepository} from "../repositories/user.repository";
import {ApiError} from "../errors/api-error";



class ArticleService {
    async create(dto: IProductArticle, jwtPayload:ITokenPayload):Promise<{article:IProductArticle,user:IUser}> {
        const user =await userRepository.getUserById(jwtPayload.userId)
        if (!user){
            throw new ApiError("User not found",404)
        }
        const article= await articleRepository.create({...dto});
        return {article,user}
    }

    async getArticles():Promise<IProductArticle[]> {
        return articleRepository.findAll();
    }

    async getArticleById(articleId: string, jwtPayload:ITokenPayload) {

        return articleRepository.findByIdAndUser(articleId,jwtPayload.userId);
    }

    async updateArticle(articleId: string, jwtPayload:ITokenPayload, dto: Partial<IProductArticle>) {
        // перевірка прав користувача
        return articleRepository.update(articleId,jwtPayload.userId,dto);
    }

    async deleteArticle(articleId: string, jwtPayload:ITokenPayload) {
        // перевірка прав користувача
        return articleRepository.delete(articleId,jwtPayload.userId);
    }
}

export const articleService = new ArticleService();
