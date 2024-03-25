import { useEffect, useState } from 'react'
import './ArticlesContainer.css'
import { Article } from '../../interfaces'
import { getArticles } from '../../services/getArticles'
import { ArticleCard } from '../ArticleCard/ArticleCard'

export const ArticlesContainer = () => {

  const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
      loadArticles()
    }, [])
    

    const loadArticles = async () => {
      setArticles(await getArticles())
    }

  return (
    <div>
      {
          articles.map( ( article ) => (
            <div key={article.id}>
              <hr />
              <ArticleCard {...article} />
            </div>
          ) )
        }
    </div>
  )
}
