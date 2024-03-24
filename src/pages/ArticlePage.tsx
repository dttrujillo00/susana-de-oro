import { useLocation } from "react-router-dom"
import { getNewById } from "../services/getNewById";
import { useEffect, useState } from "react";
import { Article } from "../interfaces/article";


export const ArticlePage = () => {

  const { pathname } = useLocation();
  const [article, setArticle] = useState<Article>({} as Article)

  useEffect(() => {

    const articleId = getIdFromLocation(pathname);
    getArticle(articleId)
    // setArticle(article)
    
    
  
  }, [])
  
  
  const getIdFromLocation = (path: string): string => {
    const splitedPath = path.split('/');
    const id = splitedPath[splitedPath.length - 1];
    return id;
  }

  const getArticle = async(articleId: string) => {
    setArticle( await getNewById(articleId))
    // const article = await getNewById(articleId)
    // return article;
  }

  console.log(article)

  

  return (
    <div className="article-page">
        <h1>
            { article.title ? article.title : 'Loading title' }
        </h1>

        <p>
            { article.body ? article.body : 'Loading body' }
        </p>
    </div>
  )
}
