import React from 'react'

function Navbar() {
  return (
    <>
     <nav class="navbar navbar-expand-lg" style={{backgroundColor: "#094b65"}}>
      <a class="navbar-brand text-light" href="/">Notre Logo</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link text-light " href="#">Evenements</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Plaintes</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Sondages</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-light" href="#">Crédits</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <a href='/login' class="btn btn-outline-danger my-2 my-sm-0" type="submit">Se deconnecter</a>
        </form>
      </div>
     </nav>
    </>
  )
}

export default Navbar
