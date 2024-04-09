import { useEffect, useState } from 'react'
import './ArticlesContainer.css'
import { Article } from '../../interfaces'
import { getArticles } from '../../services/getArticles'
import { ArticleCard } from '../ArticleCard/ArticleCard'
import { ArticleLoadingSplash } from '../ArticleLoadingSplash/ArticleLoadingSplash'

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
      loadArticles()
    }, [])
    

    const loadArticles = () => {

      getArticles()
      .then( (allArticles) => setArticles(allArticles)
      )
      .finally( () => setIsLoading(false) )
    }

  return (
    <div>
      {
        isLoading ? (
          <>
            <ArticleLoadingSplash />
            <ArticleLoadingSplash />
            <ArticleLoadingSplash />
          </>
        ) : (
          articles.map( ( article ) => (
            <div key={article.id}>
              <hr />
              <ArticleCard {...article} />
            </div>
          ) )
        )
      }

      {
        (!isLoading) && (articles.length == 0) && (
          <p className='no-articles'>Próximamente nuevos artículos sobre emprendimiento en Cuba.</p>
        )
      }
    </div>
  )
}
