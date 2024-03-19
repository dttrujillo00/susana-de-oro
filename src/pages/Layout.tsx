import { Link, Outlet } from "react-router-dom"


export const Layout = () => {
  return (
    <div>
      <nav className="nav">
        <h1>Susana de Oro</h1>
        <i className="fa-solid fa-bars fa-xl"></i>
        {/* <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/'>Servicios</Link>
          </li>
          <li>
            <Link to='/'>Contacto</Link>
          </li>
          <li>
            <Link to='/about'>¿Quién soy?</Link>
          </li>
          <li>
            <Link to='/about'>Actualidad</Link>
          </li>
        </ul> */}
      </nav>

      <Outlet />
    </div>
  )
}
