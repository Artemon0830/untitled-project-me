import {Router} from "express";
import {articleController} from "../controlers/article.controller";
import {commonMiddleware} from "../middlewares/common.middleware";
import {authMiddleware} from "../middlewares/auth.middleware";


const router = Router();

router.post('/create',authMiddleware.checkAccessToken,articleController.create)
router.get('/', articleController.getArticle)
router.get('/:articleId',authMiddleware.checkAccessToken,commonMiddleware.isIdValid('articleId'),articleController.getArticleById)
router.put('/:articleId',authMiddleware.checkAccessToken,commonMiddleware.isIdValid('articleId'),articleController.updateArticle)
router.delete('/:articleId',authMiddleware.checkAccessToken,commonMiddleware.isIdValid('articleId'),articleController.deleteArticle)

export const articleRouter = router;