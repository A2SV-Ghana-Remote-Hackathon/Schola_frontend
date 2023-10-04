import React from 'react';
import logoImage from '../assets/img/logo.png';
import profileImage from '../assets/img/profile-img.jpg'; // Import your profile image
import {Link} from "react-router-dom"

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center pl-50">
      <div className="d-flex align-items-center justify-content-between ">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src={logoImage} alt="" />
          <span className="d-none d-lg-block">Schola</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>
      {/* End Logo */}
      <div className="search-bar">
        <form className="search-form d-flex align-items-center" method="POST" action="#">
          <input type="text" name="query" placeholder="Search" title="Enter search keyword" />
          <button type="submit" title="Search"><i className="bi bi-search"></i></button>
        </form>
      </div>
      {/* End Search Bar */}
      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item d-block d-lg-none">
            <a className="nav-link nav-icon search-bar-toggle" href="#">
              <i className="bi bi-search"></i>
            </a>
          </li>
          
          <li className="nav-item">
            <Link className="nav-link nav-profile d-flex align-items-center pe-0" to='/profile'>
              <img src={profileImage} alt="Profile" className="rounded-circle" />
              <span className="ps-2 pl-20 pr-20">Kofi Notter</span>
            </Link>
            {/* End Profile Iamge Icon */}
          </li>
          {/* End Profile Nav */}
        </ul>
      </nav>
      {/* End Icons Navigation */}
    </header>
    /* End Header */
  );
}

export default Header;
