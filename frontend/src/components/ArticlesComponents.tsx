import React, { useEffect, useState } from 'react'
import { IProductArticle } from '../models/IArticle-interface'
import { getAllArticles } from '../services/user.service.api'
import ArticleComponent from './ArticleComponent'
const ArticlesComponents=()=>{
const[articles,setArticles]=useState<IProductArticle[]>([])
useEffect(()=>{
getAllArticles().then(value=>setArticles([...value.data]))    
},[])
 return(<div>
{articles.map(article=><div><ArticleComponent article={article}/></div>)}
 </div>)   
}
export default ArticlesComponents