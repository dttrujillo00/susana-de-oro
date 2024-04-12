import { useLocation } from "react-router-dom"
import { Hero, Servicios, ContainerHomeContent, FormContact, Whoami, Actualidad, WhatsAppBubble } from "../components"
import { useEffect } from "react";

export const Home = () => {

  const { pathname } = useLocation();

  const [ , section] = pathname.split('/');
  
  useEffect(() => {

    if (section.length > 0) {
      document.querySelector(`.${section}`)?.scrollIntoView( { behavior: 'smooth', block: 'start' })
    }
  
  }, [pathname])

 


  return (
    <div className="home-container">
      <div className="to-hero">
        <Hero />
      </div>
      <ContainerHomeContent>
        <div className="to-servicios-container">
          <Servicios />
        </div>

        <div className="to-form-section">
          <FormContact />
        </div>

        <div className="to-whoami">
          <Whoami />
        </div>

        <div className="to-actualidad">
          <Actualidad />
        </div>

        <WhatsAppBubble />
      </ContainerHomeContent>
    </div>
  )
}
