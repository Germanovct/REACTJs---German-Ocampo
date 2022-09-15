import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget/CartWidget'

export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <CartWidget/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
        </li>
        
        <div className='collapse navbar-collapse' id="navbarNavDarkDropdown">
      <ul className='navbar-nav'>
        <li className='nav-item dropdown'>
          <Link className='nav-link dropdown-toggle' to="/productos" role="button" data-bs-toggle="dropdown" aria-expanded="true">
            Releases
          </Link>
          <ul className='dropdown-menu dropdown-menu-dark'>
            <li><Link className="dropdown-item" to="/productos/todos">Todos</Link></li>
            <li><Link className="dropdown-item" to="/productos/cassette">Cassette</Link></li>
            <li><Link className="dropdown-item" to="/productos/digital">Digital</Link></li>
            <li><Link className="dropdown-item" to="/productos/vinyl">Vinyl</Link></li>
          </ul>
        </li>
      </ul>
    </div>
        <li className="nav-item">
          <Link to="*" className='nav-link' >Bandcamp</Link>
        </li>
        <li className="nav-item">
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
        </li>
        <li className="nav-item">
          <Link to="/contacto" className="nav-link" >Contacto</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
