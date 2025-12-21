import {NextFunction, Request, Response} from "express";
import {IUser} from "../interfaces/user.interface";
import {articleService} from "../service/article.service";


class ArticleController{
    async getArticle(req: Request, res: Response,next:NextFunction) {
        const result = await articleService.getArticles();
        res.send(result)
    }

    async getArticleById(req: Request, res: Response,next:NextFunction) {
        try {
            const jwtPayload = req.res.locals.jwtPayload
            const articleId = req.params.articleId
            const result = await articleService.getArticleById(articleId,jwtPayload);
            res.send(result)
        } catch (e) {
            next(e)
        }
    }
    async updateArticle(req: Request, res: Response,next:NextFunction) {
        try {
            const jwtPayload = req.res.locals.jwtPayload
            const articleId = req.params.articleId;
            const dto = req.body as IUser;
            const result = await articleService.updateArticle(articleId, dto,jwtPayload);
            res.send(result)
        } catch (e) {
            next(e)
        }

    }

    async deleteArticle(req: Request, res: Response,next:NextFunction) {
        try {
            const jwtPayload = req.res.locals.jwtPayload
            const articleId = req.params.articleId;
            const result = await articleService.deleteArticle(articleId,jwtPayload);
            res.send(result)
        } catch (e) {
            next(e)
        }
    }

}
export const articleController = new ArticleController();
