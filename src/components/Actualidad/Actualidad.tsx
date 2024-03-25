import { useEffect, useState } from 'react'
import { getArticles } from '../../services/getArticles'
import { ArticleCard } from '../ArticleCard/ArticleCard'
import { Article } from '../../interfaces';
import  './Actualidad.css'



export const Actualidad = () => {

    const [articles, setArticles] = useState<Article[]>([])

    useEffect(() => {
      loadArticles()
    }, [])
    

    const loadArticles = async () => {
      setArticles(await getArticles())
    }


  return (
    <section className='actualidad'>
        <h2>Actualidad</h2>

        {
          articles?.map( ( article ) => (
            <div key={article.id}>
              <hr />
              <ArticleCard {...article} />
            </div>
          ) )
        }

    </section>
  )
}
