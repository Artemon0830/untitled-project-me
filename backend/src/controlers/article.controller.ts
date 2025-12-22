import {NextFunction, Request, Response} from "express";
import {IProductArticle} from "../interfaces/article.interface";
import {articleService} from "../service/article.service";


class ArticleController{
    async create(req:Request,res:Response,next:NextFunction){
        try {
            const jwtPayload = req.res.locals.jwtPayload
            const dto = req.body as IProductArticle
            const result = await articleService.create(dto, jwtPayload)
            res.send(result)
        } catch (e) {
            next(e)
        }
    }

    async getArticle(req: Request, res: Response,next:NextFunction) {
        try {
            const result = await articleService.getArticles();
            res.send(result)
        } catch (e) {
            next(e)
        }
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
            const dto = req.body ;
            const result = await articleService.updateArticle(articleId, jwtPayload,dto);
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
