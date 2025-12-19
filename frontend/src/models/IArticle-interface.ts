import { ArticleSizeEnum } from "./enums/article.size.enum";

export interface IArticle{ 
    _id:string;
    name:string;
    description?:string;
    size:ArticleSizeEnum;
    
}