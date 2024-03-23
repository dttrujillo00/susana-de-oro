import './NewsCard.css'

interface Props {
    title: string;
    body: string;
}

export const NewsCard = ({ title, body }:Props) => {
  return (
    <div className='news-card'>
        <h3>{ title }</h3>
        <hr />
        <p>{ body }</p>
    </div>
  )
}
