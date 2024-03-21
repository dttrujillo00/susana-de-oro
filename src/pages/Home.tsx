import { Hero, Servicios, ContainerHomeContent, FormContact, Whoami } from "../components"

export const Home = () => {

  return (
    <div className="home-container">
      <Hero />
      <ContainerHomeContent>
        <Servicios />
        <FormContact />
        <Whoami />
      </ContainerHomeContent>
    </div>
  )
}
