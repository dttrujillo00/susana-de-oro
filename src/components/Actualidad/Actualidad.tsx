import { news } from '../../data/news'
import { NewsCard } from '../NewsCard/NewsCard'
import  './Actualidad.css'

export const Actualidad = () => {

  return (
    <section className='actualidad'>
        <h2>Actualidad</h2>

        {
          news.map( ({ id, title, body }) => (
            <NewsCard key={ id } title={ title } body={ body } />
          ) )
        }
    </section>
  )
}
