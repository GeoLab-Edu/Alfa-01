import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

// import './App.css'
import './style.css'

function Header() {
  return (
    <div className="navdiv">
      <nav>
          <ul>
              <li>
                  <NavLink to= "/Home">
                      <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 51.747 42.702">
                      <path id="Path_54" data-name="Path 54" d="M1624.92,2336h-38.492a8.676,8.676,0,0,0-7.428,9v21.609s1.351,6.078,7.428,6.753,22.96,0,22.96,0a7.173,7.173,0,0,0,6.753-5.853C1617.492,2361.661,1624.92,2336,1624.92,2336Z" transform="translate(-1576.5 -2333.5)" fill="none" stroke="#E84F5B" strokeWidth="5"/>
                      </svg> 
                      <span className="navLogo">ALPHA</span>
                  </NavLink>
              </li>
          </ul>
          <ul>
              <li>
                  <NavLink className="navStyle" isActive={(match, location) => {
                      if(location.pathname === '/' || match) {
                          return true 
                      }
                      return false
                  }} to= "/Home"> INDIVIDUAL </NavLink>
              </li>  
              <li>
                  <NavLink to= "/ListOfProducts"> FOR BUSSINES </NavLink>
              </li>
              <li>
                  <NavLink to= "/Products"> COMPANY </NavLink>
              </li>
              <li className="liPersonalCabnet">
                  <NavLink className="aPersonalCabnet" to= "/Products"> PERSONAL CABNET </NavLink>
              </li>
          </ul>
      </nav>
    </div>
    
  );
}

export default Header;