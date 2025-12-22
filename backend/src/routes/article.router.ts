import {Router} from "express";
import {articleController} from "../controlers/article.controller";


const router = Router();

router.post('/create',articleController.create)
router.get('/', articleController.getArticle)
router.get('/:articleId',articleController.getArticleById)
router.put('/:articleId',articleController.updateArticle)
router.delete('/:articleId',articleController.deleteArticle)

export const articleRouter = router;