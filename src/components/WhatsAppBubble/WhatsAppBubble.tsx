import { Link } from 'react-router-dom'
import './WhatsAppBubble.css'

export const WhatsAppBubble = () => {
  return (
    <div className='whatsapp-bubble'>
        <Link to={'https://api.whatsapp.com/send?phone=58469814&text=Hola%20Lic. de Oro, estoy interesad@ en sus servicios...'}>
            <i className="fab fa-whatsapp fa-2xl"></i>
        </Link>
    </div>
  )
}
