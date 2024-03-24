import { useEffect, useState } from 'react'
import { getNews } from '../../services/getNews'
import { NewsCard } from '../NewsCard/NewsCard'
import  './Actualidad.css'

export const Actualidad = () => {

    const [news, setNews] = useState([])

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
          news.map( ({ id, title, body }) => (
            <>
              <hr />
              <NewsCard key={ id } title={ title } body={ body } />
            </>
          ) )
        }

    </section>
  )
}
