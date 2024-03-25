import { Children } from '../../interfaces';
import './ArticlesContainer.css'

export const ArticlesContainer = ({ children }:Children) => {
  return (
    <div>
      {
        children
      }
    </div>
  )
}
