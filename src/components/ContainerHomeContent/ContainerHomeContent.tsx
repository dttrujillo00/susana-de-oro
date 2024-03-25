import { Children } from '../../interfaces'
import './ContainerHomeContent.css'

export const ContainerHomeContent = ({ children }:Children) => {
  return (
    <div className='home-content-container'>
        {
            children
        }
    </div>
  )
}
