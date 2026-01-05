import React, {useEffect, useState} from 'react'
import {IProductArticle} from '../models/IArticle-interface'
import {articleService} from '../services/user.service.api'
import ArticleComponent from './ArticleComponent'

const ArticlesComponents=()=>{
const[articles,setArticles]=useState<IProductArticle[]>([])
useEffect(()=>{
articleService.getAllArticles().then(value => setArticles([...value.data]))
},[])
 return(<div>
{articles.map(article=><div><ArticleComponent article={article}/></div>)}
 </div>)   
}
export default ArticlesComponents