import { Hero, Servicios, ContainerHomeContent, FormContact } from "../components"

export const Home = () => {

  return (
    <div className="home-container">
      <Hero />
      <ContainerHomeContent>
        <Servicios />
        <FormContact />
      </ContainerHomeContent>
    </div>
  )
}
