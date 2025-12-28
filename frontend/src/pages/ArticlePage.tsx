import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IUserInterface } from "../models/IUser-interface";
import UserComponent from "../components/UserComponent";
import { getUser } from "../services/user.service.api";
import ArticleComponent from "../components/ArticleComponent";
import { IProductArticle } from "../models/IArticle-interface";

const ArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const [article,setArticle] = useState<IProductArticle | null>(null);

  useEffect(() => {
    if (id) return;
     getUser("id").then(value =>setArticle)

  }, [id]);

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