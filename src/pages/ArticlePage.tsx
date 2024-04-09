import { useLocation } from "react-router-dom"
import { getArticleById } from "../services/getArticleById";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/article";
import { ArticleLoadingSplash } from '../components/ArticleLoadingSplash/ArticleLoadingSplash';


export const ArticlePage = () => {

  const { pathname } = useLocation();
  const [article, setArticle] = useState<Article>({} as Article)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {

    const articleId = getIdFromLocation(pathname);
    getArticle(articleId)

  }, [])


  const getIdFromLocation = (path: string): string => {
    const splitedPath = path.split('/');
    const id = splitedPath[splitedPath.length - 1];
    return id;
  }

  const getArticle = async (articleId: string) => {

    getArticleById(articleId)
      .then((article) => setArticle(article))
      .finally(() => setIsLoading(false))

  }



  return (
    <>
      <div className="article-page">
        {
          isLoading ? (
            <ArticleLoadingSplash />
          ) : (
            <>
              <h1>
                {article.title}
              </h1>

              <p>
                {article.body}
              </p>
            </>

          )
        }
      </div>
    </>
  )
}
