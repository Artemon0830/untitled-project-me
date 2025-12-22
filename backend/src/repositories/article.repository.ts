import {IProductArticle} from "../interfaces/article.interface";
import {Article} from "../models/article.model";


export class ArticleRepository {
    async create(dto: IProductArticle):Promise<IProductArticle> {
        return await Article.create(dto)
    }

    async findAll():Promise<IProductArticle[]> {
        return  await Article.find({})
    }

    async findByIdAndUser(articleId:string,userId:string):Promise<IProductArticle> {
        return Article.findOne({id:articleId,_userId:userId})
    }

    async update(articleId: string,userId:string, dto: Partial<IProductArticle>) {

        return Article.findOneAndUpdate({ _id: articleId, _userId: userId },dto )
    }

    async delete(articleId: string, userId: string): Promise<void> {
        const deletedArticle = await Article.findOneAndDelete({ _id: articleId, _userId: userId });

        if (!deletedArticle) {
            throw new Error('Article not found or you do not have permission to delete it');
        }
    }
}

export const articleRepository = new ArticleRepository();


