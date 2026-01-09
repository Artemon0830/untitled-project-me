import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { articleService } from "../services/user.service.api";
import { IProductArticle } from "../models/IArticle-interface";

const ArticlePage = () => {
  const {articleId} = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<IProductArticle | null>(null);
  console.log(articleId)
  useEffect(() => {
    if (!articleId) return;

    articleService.getArticle(articleId).then(res => {
      setArticle(res.data);
      console.log(res.data)
    });
  }, [articleId]);

  if (!article) {
    return <div>Loading article...</div>;
  }

  return (
      <div>
        <div>ID: {article._id}</div>
        <div>Title: {article.title}</div>
        <div>Price: {article.price}</div>
      </div>
  );
};

export default ArticlePage;
