import { Link } from 'react-router-dom';
import { Article } from '../../interfaces';
import './ArticleCard.css'

export const ArticleCard = ({ id, title, body }:Article) => {

  return (
    <div className="article-card">
      <Link to={`/article/${id}`}>
          <h3>{ title }</h3>
          <p>{ body }</p>
      </Link>
    </div>
  )
}
