import { useEffect, useState } from 'react'
import './ArticlesContainer.css'
import { Article } from '../../interfaces'
import { getArticles } from '../../services/getArticles'
import { ArticleCard } from '../ArticleCard/ArticleCard'

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
      loadArticles()
    }, [])
    

    const loadArticles = () => {
  
      setIsLoading(true);

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
            <ArticleCard id={0} title='anything' body='anything else' isLoading />
            <ArticleCard id={1} title='anything' body='anything else' isLoading />
            <ArticleCard id={2} title='anything' body='anything else' isLoading />
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
    </div>
  )
}
