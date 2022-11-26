import React,{Link} from 'react';

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
            <Link to='/addEvent' class="nav-link">Evenements</Link>
          </li>
          <li class="nav-item">
          <Link to='/' class="nav-link text-light">Plaintes</Link>
          </li>
          <li class="nav-item">
          <Link to='/badge' class="nav-link text-light">Badge</Link>
          </li>
          <li class="nav-item">
          <Link to='/credit' class="nav-link text-light">Crédit</Link>
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
