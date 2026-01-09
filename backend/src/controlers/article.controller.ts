import {NextFunction, Request, Response} from "express";
import {IProductArticle, IProductCreateArticle} from "../interfaces/article.interface";
import {articleService} from "../service/article.service";
import {ITokenPayload} from "../interfaces/token.interface";


class ArticleController{
    async create(req:Request,res:Response,next:NextFunction){
        try {
            const jwtPayload = req.res.locals.jwtPayload as ITokenPayload;
            console.log('BODY:', req.body);
            console.log('JWT:', req.res.locals.jwtPayload);
            const dto = req.body as IProductCreateArticle;
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

    async getArticleById(req: Request, res: Response, next: NextFunction) {
        try {
            const jwtPayload = req.res.locals.jwtPayload as ITokenPayload;
            const articleId = req.params.articleId;
            const result = await articleService.getArticleById(articleId, jwtPayload);
            if (!result) {
                return res.status(404).json({ message: "Article not found" });
            }
            res.json(result);
        } catch (e) {
            next(e);
        }
    }
    async updateArticle(req: Request, res: Response, next: NextFunction) {
        try {
            const jwtPayload = req.res.locals.jwtPayload as ITokenPayload;
            const articleId = req.params.articleId;
            const dto = req.body as Partial<IProductArticle>;
            const result = await articleService.updateArticle(jwtPayload, articleId, dto);
            res.status(200).json(result);
        } catch (e) {
            next(e);
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
