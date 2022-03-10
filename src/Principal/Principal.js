import React from "react";
import './css/principal.css';
const Principal = () =>{
    
    return (
<nav className="navbar navbar-light bg-light fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">ADMautos</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">ADMautos</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              opciones
            </a>
            <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
              <li><a className="dropdown-item" href="#">config</a></li>
              <li><a className="dropdown-item" href="#"></a></li>
              <li>
                <hr className="dropdown-divider"/>
              </li>
              <li><a className="dropdown-item" href="#">salir</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    )
}
export default Principal;