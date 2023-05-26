import React from 'react'
import Seguidores from './Seguidores';
import Remover from './Remover';
import SOS from './SOS';
import LastLocation from './LastLocation';
import Insert from './Insert';


function Burguer ()  {
  return (
<nav class="navbar navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item">
            <a class="nav-link active" href="#"><Seguidores/></a>
          </li>
          <li class="nav-item">
          </li>
            <a class="nav-link" href="#"><Remover/>Remover Seguidores</a>
          <li class="nav-item">
            <a class="nav-link" href="#"><SOS/>SOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><LastLocation/>Última Localização</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#"><Insert/>Inserir Localização</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{logout}Sair</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Burguer;