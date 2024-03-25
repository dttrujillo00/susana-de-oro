import { ArticlesContainer } from '../ArticlesContainer/ArticlesContainer';
import  './Actualidad.css'



export const Actualidad = () => {


// TODO: se puede aislar el codigo de obtener los articulos dado que tambien se utiliza en el dashboard
  return (
    <section className='actualidad'>
      
        <h2>Actualidad</h2>
        <ArticlesContainer />

    </section>
  )
}
