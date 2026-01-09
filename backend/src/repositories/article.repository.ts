import {IProductArticle, IProductCreateArticle} from "../interfaces/article.interface";
import {Article} from "../models/article.model";


export class ArticleRepository {
    async create(dto: IProductCreateArticle & { _userId: string }):Promise<IProductArticle> {
        return await Article.create(dto)
    }

    async findAll():Promise<IProductArticle[]> {
        return  await Article.find({})
    }

    async findByIdAndUser(articleId: string, userId: string): Promise<IProductArticle | null> {
        return Article.findOne({_id:articleId,_userId:userId});
    }

    async update(userId: string, articleId: string, dto: Partial<IProductArticle>): Promise<IProductArticle | null> {
        return Article.findOneAndUpdate(
            { _userId: userId, _id: articleId },
            dto,
            { new: true } // return updated document
        ).lean();
    }


    async delete(articleId: string, userId: string): Promise<void> {
        const deletedArticle = await Article.findOneAndDelete({ _id: articleId, _userId: userId });

        if (!deletedArticle) {
            throw new Error('Article not found or you do not have permission to delete it');
        }
    }
}

export const articleRepository = new ArticleRepository();


