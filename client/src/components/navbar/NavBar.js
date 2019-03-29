import React from 'react';
import { Link } from 'react-scroll';

import './NavBar.css'

const NavBar = ({navRouter}) => (
  <nav style={{position:'fixed', width:'95%'}} className="navbar navbar-expand-lg navbar-light transparent navbar-inverse navbar-inner">
  <span style={{color:'grey',cursor:'pointer'}} onClick={() => navRouter('main')} className="navbar-dark navbar-brand">HOME</span>
  <button  className="navbar-dark navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-dark navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <span style={{color:'grey',cursor:'pointer'}} onClick={() => navRouter('resume')} className="nav-link">RESUME <span className="sr-only">(current)</span></span>
      </li>
      <li className="nav-item active">
        <Link
          activeClass="active"
          to="contactsection"
          spy={true}
          smooth={true}
          offset={-70}
          duration= {800}
        >
        <span style={{color:'grey',cursor:'pointer'}} className="nav-link">CONTACT <span className="sr-only">(current)</span></span>
        </Link>
      </li>
      <li className="nav-item">
        <a style={{color:'grey'}} target="_blank" rel="noopener noreferrer" className="nav-link" href="https://www.aleksandargujas.net">BLOG</a>
      </li>
    </ul>
  </div>
</nav>
);

export default NavBar;