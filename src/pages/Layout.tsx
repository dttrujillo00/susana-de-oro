import { useState } from "react"
import { Link, Outlet } from "react-router-dom"


export const Layout = () => {

  const [listNavClassName, setListNavClassName] = useState('list-nav')

  const onShowMenu = () => {
    setListNavClassName('list-nav show')
  }

  const onCloseMenu = () => {
    setListNavClassName('list-nav')
  }

  return (
    <div>
      <nav className="nav">

        <Link to='/'>
          <h1>Susana de Oro</h1>
        </Link>

        <i onClick={ onShowMenu } className="fa-solid fa-bars fa-xl"></i>

        <ul className={ listNavClassName }>
        <i onClick={ onCloseMenu } className="fa-solid fa-xmark fa-2xl close-menu"></i>
          <li>
            <Link onClick={ onCloseMenu } to='/'>Inicio</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/'>Servicios</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/'>Contacto</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/about'>¿Quién soy?</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/about'>Actualidad</Link>
          </li>
        </ul>

      </nav>

      <Outlet />
    </div>
  )
}
