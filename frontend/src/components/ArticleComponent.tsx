import React,{FC} from "react"
import { IProductArticle } from "../models/IArticle-interface"
interface IProps {
 article:IProductArticle 
}

const ArticleComponent:FC<IProps>=({article})=>{
    return(<div>
        <p>{article._id}</p>
        <p>{article.price}</p>
        <p>{article.title}</p>
        </div>)
}
export default ArticleComponent