
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

export type IProductCreateArticle = Pick<IProductArticle,"available"|"category"|"currency"|"price"|"title"|"content"|"description"|"stockQuantity"|"oldPrice">

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
