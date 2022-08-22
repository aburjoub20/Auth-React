import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.css';
export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${style.nav}`}>
  <Link className="navbar-brand" to="/">Navbar</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">

      <li className="nav-item">
        <Link className="nav-link" to="/home">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Movies">Movies</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/TvShow">TvShow</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Pepole">Pepole</Link>
      </li>
    </ul>
  
   
  </div>
  <div className='social-link'>
  <i className="fa-brands fa-instagram"></i>
    <i className="fa-brands fa-facebook"></i>
    <i className="fa-brands fa-twitter"></i>
  </div>
 

    <ul className='list-unstyled d-flex'>
    <li className="nav-item">
        <Link className="nav-link" to="/Login">Login</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/Register">Register</Link>
      </li>

    </ul>
  
    
</nav>

  )
}
