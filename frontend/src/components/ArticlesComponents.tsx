import React, {useEffect, useState} from 'react'
import {IProductArticle} from '../models/IArticle-interface'
import {articleService} from '../services/user.service.api'
import ArticleComponent from './ArticleComponent'
import {useSearchParams} from "react-router-dom";
import BlogFilter from "./BlogFilter";

const ArticlesComponents=()=>{
const[articles,setArticles]=useState<IProductArticle[]>([])
 const [searchParams,setSearchParams]=useSearchParams();
const articleQuery = searchParams.get('article') || '';


useEffect(()=>{
 articleService.getAllArticles().then(value => setArticles([...value.data]))
},[])
 return(<div>
<BlogFilter articleQuery={articleQuery} setSearchParams={setSearchParams}/>
{articles.filter(article => article.title.includes(articleQuery)).map(article=><div><ArticleComponent article={article}/></div>)}
 </div>)   
}
export default ArticlesComponents