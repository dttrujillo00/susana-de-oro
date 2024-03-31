import { Link } from 'react-router-dom';
import { Article } from '../../interfaces';
import './ArticleCard.css'

export const ArticleCard = ({ id, title, body, isLoading }:Article) => {

  const classList = isLoading ? 'article-card loading-splash' : 'article-card';

  return (
    <div className={classList}>
      <Link to={`/article/${id}`}>
          <h3>{ title }</h3>
          <p>{ body }</p>
      </Link>
    </div>
  )
}
