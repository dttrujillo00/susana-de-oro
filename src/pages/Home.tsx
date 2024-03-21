import { Hero, Servicios, ContainerHomeContent, FormContact, Whoami, Actualidad } from "../components"

export const Home = () => {

  return (
    <div className="home-container">
      <Hero />
      <ContainerHomeContent>
        <Servicios />
        <FormContact />
        <Whoami />
        <Actualidad />
      </ContainerHomeContent>
    </div>
  )
}
