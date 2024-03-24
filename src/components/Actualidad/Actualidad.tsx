import { useEffect, useState } from 'react'
import { getNews } from '../../services/getNews'
import { NewsCard } from '../NewsCard/NewsCard'
import  './Actualidad.css'
import { Article } from '../../interfaces/article';



export const Actualidad = () => {

    const [news, setNews] = useState<Article[]>([])

    useEffect(() => {
      loadNews()
    }, [])
    

    const loadNews = async () => {
      setNews(await getNews())
    }


  return (
    <section className='actualidad'>
        <h2>Actualidad</h2>

        {
          news?.map( ( article ) => (
            <div key={article.id}>
              <hr />
              <NewsCard {...article} />
            </div>
          ) )
        }

    </section>
  )
}
