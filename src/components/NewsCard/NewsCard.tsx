import { Link } from 'react-router-dom';
import './NewsCard.css'
import { Article } from '../../interfaces/article';

export const NewsCard = ({ id, title, body }:Article) => {
  return (
    <div className='news-card'>
      <Link to={`/article/${id}`}>
          <h3>{ title }</h3>
          <p>{ body }</p>
      </Link>
    </div>
  )
}
