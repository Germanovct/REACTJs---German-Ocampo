import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a href="#">
      <img src='./cart.png' width={20} />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Releases</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Bandcamp</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
