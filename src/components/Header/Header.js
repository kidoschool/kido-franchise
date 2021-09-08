import React from 'react';
import {withRouter, NavLink} from "react-router-dom";
import logo from '../../assets/kido-logo.png';
import $ from "jquery";


function Header(props){

    return(
      <>
       <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
          <NavLink className="navbar-brand pl-4" to="/"><img src={logo} alt="logo" width="140"/></NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto w-100 justify-content-end clearfix">
              <li className="nav-item active pl-4">
                <NavLink className="nav-link" to="/">Home</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/about-us">About</NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                <NavLink className="nav-link pl-4 dropdown-toggle" to="/opportunity" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Opportunity
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/usa">usa</NavLink>
                </div>
              </li> */}
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/opportunity">Opportunity</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/usa">Usa</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/curriculum">Curriculum</NavLink>
              </li>
              <li className="nav-item pl-4">
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      </>

    );

}

export default withRouter(Header);