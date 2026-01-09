import {IUser} from "./IUserWithTokens";

export interface IProductArticle {
    _id: string;

    title: string;
    slug: string;
    description: string;
    content: string;

    price: number;
    oldPrice?: number;
    currency: Currency

    available: boolean;
    stockQuantity: number;
    sku: string;

    category: ProductCategory;
    tags?: string[];

    coverImage?: string;
    images?: string[];

    views: number;
    likes: number;
    rating: number;

    _userId:string;
    createdAt: string;
    updatedAt?: string;
}

export interface IProductArticleWithUser{
    article:IProductArticle;
    user:IUser;
}

export interface IProductCreateArticle {
    title: string;
    description: string;
    content: string;
    category: ProductCategory;
    price: number;
    currency: Currency;
    stockQuantity: number;
    oldPrice?: number;
}


    export enum ProductCategory {
        ELECTRONICS = 'electronics',
        CLOTHING = 'clothing',
        HOME = 'home',
        BOOKS = 'books',
        FOOD = 'food',
        BEAUTY = 'beauty',
        SPORTS = 'sports',
        TOOLS = 'tools',
        OTHER = 'other',
    }

    export enum Currency {
        UAH = 'UAH',
        USD = 'USD',
        EUR = 'EUR',
    }
