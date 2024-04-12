import React, { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"



export const Layout = () => {

  const [listNavClassName, setListNavClassName] = useState<string>('list-nav');
  const [navClassName, setNavClassName] = useState<string>('');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  

  useEffect(() => {

    if(pathname.includes("article")) {

      setNavClassName('nav background');

    } else {

      setNavClassName('nav');
      window.addEventListener('scroll', onNavBackground );

      return () => {
        window.removeEventListener('scroll', onNavBackground);
      }
    }
  
  }, [pathname])
  

  const onShowMenu = () => {
    setListNavClassName('list-nav show');
  }

  const onCloseMenu = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setListNavClassName('list-nav');
    console.log(`/${e.currentTarget.id}`)

    if (e.currentTarget.id) {
      navigate(`/${e.currentTarget.id}`);
    }
  }

  const onNavBackground = () => {
    if (window.scrollY >= window.innerHeight - 50) {
      setNavClassName('nav background');
    } else {
      setNavClassName('nav');
    }
  }

  return (
    <div>
      <nav className={ navClassName }>

        <Link to='/'>
          <h1>Susana de Oro</h1>
        </Link>
        
        

        <i onClick={ onShowMenu } className="fa-solid fa-bars fa-xl"></i>

        <ul className={ listNavClassName }>
        <i onClick={ onCloseMenu } className="fa-solid fa-xmark fa-2xl close-menu"></i>
          <li>
            <Link onClick={ onCloseMenu } to='/' id="hero">Inicio</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/' id="servicios-container">Servicios</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/' id="form-section">Contacto</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/' id="whoami">¿Quién soy?</Link>
          </li>
          <li>
            <Link onClick={ onCloseMenu } to='/' id="actualidad">Actualidad</Link>
          </li>
        </ul>

      </nav>

      <Outlet />
    </div>
  )
}
