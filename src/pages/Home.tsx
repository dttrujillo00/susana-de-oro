import { Hero, Servicios, ContainerHomeContent, FormContact, Whoami, Actualidad, WhatsAppBubble } from "../components"

export const Home = () => {

  return (
    <div className="home-container">
      <Hero />
      <ContainerHomeContent>
        <Servicios />
        <FormContact />
        <Whoami />
        <Actualidad />
        <WhatsAppBubble />
      </ContainerHomeContent>
    </div>
  )
}
