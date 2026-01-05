import React, {useEffect, useState} from "react";
import {useParams} from "react-router";
import {articleService} from "../services/user.service.api";
import ArticleComponent from "../components/ArticleComponent";
import {IProductArticle} from "../models/IArticle-interface";

const ArticlePage = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article,setArticle] = useState<IProductArticle | null>(null);

  useEffect(() => {
    if (articleId) return;
     articleService.getArticle('articleId').then(value => setArticle(value.data))

  }, [articleId]);

  if (!article) {
    return <div>Loading article...</div>;
  }

  return (
    <div>
      <ArticleComponent article={article}/>
    </div>
  );
};

export default ArticlePage;