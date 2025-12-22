import {model, Schema} from "mongoose";


import {Currency, IProductArticle, ProductCategory} from "../interfaces/article.interface";


const articleSchema = new Schema({

    id:{type:String,required:true},

    title:{type:String,required:true},
    slug:{type:String,required:true},
    description:{type:String,required:true},
    content:{type:String,required:true},

    price: {type:Number,required:true},
    oldPrice:{type:Number,required:false},
    currency:{ type: String, enum:Object.values( Currency), required: true },

    available: {type:Boolean,default:false},
    stockQuantity: {type:Number,required:true},
    sku: {type:String,required:true},

    category: {type:String,enum:Object.values(ProductCategory),required:true},
    tags:{type:[String], required:false},
        coverImage: {type:String, required:false},
        _userId: {type: Schema.Types.ObjectId, required: true, ref: 'User'},

    images: {type:[String], required:false},
        views:{type:Number,required:false},
        likes:{type:Number,required:false},

    rating:{type:Number,required:false},

},
    {
    timestamps: true,
    versionKey: false
});
export const Article = model<IProductArticle>('articles', articleSchema);