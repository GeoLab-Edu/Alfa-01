import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import './style.css';
import Mask from './images/Mask Group 1.svg';
import { useTranslation } from 'react-i18next';



function Header() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }

  return (
    <div className="header">
        <nav>
            <ul className="ulLogo">
                <li>
                  <NavLink className="logo" to= "/Home">
                        <img className="Mask" alt="error" src={Mask}/>
                        <svg xmlns="http://www.w3.org/2000/svg" width="122" height="25.53" viewBox="0 0 122 25.53">
                            <g id="Group_417" dataname="Group 417" transform="translate(-2.56 -2.415)">
                                <path id="Path_204" dataname="Path 204" d="M162.707,12.651c0-2.59.107-4.9-.033-7.2-.12-1.965.719-2.727,2.569-2.7,1.894.023,3.866,0,3.98,2.6.117,2.655.073,5.317.078,7.977.007,3.906-.117,7.817.034,11.717.078,2-.762,2.786-2.556,2.726-1.819-.06-3.874,0-4.057-2.588a42.7,42.7,0,0,1-.009-4.98c.079-1.677-.515-2.3-2.29-2.32-6.193-.059-6.193-.126-6.227,6.043-.006,1.068,0,2.135,0,3.241a20.39,20.39,0,0,1-2.109.556c-3.164.466-4.552-.645-4.582-3.854-.058-6.233.04-12.468-.052-18.7-.028-1.932.9-2.483,2.542-2.432,1.807.056,3.916-.206,4.14,2.417a54.438,54.438,0,0,1,.053,5.732c-.025,1.244.414,1.826,1.736,1.783C157.992,12.6,160.064,12.651,162.707,12.651Z" transform="translate(-72.542 -0.16)" fill="#fff"/>
                                <path id="Path_205" dataname="Path 205" d="M18.074,22.256c-2.217,0-4.284.061-6.345-.018-1.739-.068-1.7,1.276-1.982,2.325-.827,3.12-1.976,3.953-4.881,3.126-1.639-.466-2.793-1.417-2.1-3.484,2.122-6.361,4.23-12.728,6.244-19.123C9.583,3.25,11.031,3.111,12.471,2.8c4.437-.95,6.843.31,8.13,4.528,1.812,5.936,3.4,11.938,5.237,17.867.457,1.481-.075,1.955-1.267,2.344-3.1,1.012-4.9.086-5.849-3.049C18.529,23.861,18.353,23.224,18.074,22.256Zm-1.043-5.344L14.774,9l-.7-.049-2.633,7.964Z" transform="translate(0 -0.044)" fill="#fff"/>
                                <path id="Path_206" dataname="Path 206" d="M223.131,26.452c-2.965,2.343-7.256,1.841-7.681-2.466-.139-1.4-.883-1.831-2.177-1.717-.66.058-1.33-.009-2-.011-3.9-.017-3.9-.016-4.989,3.593-.54,1.786-2.284,2.517-4.634,1.808-1.621-.489-2.629-1.551-2.042-3.37,2.117-6.555,4.2-13.126,6.54-19.6.323-.892,1.99-1.561,3.153-1.84,4.547-1.089,6.912.271,8.25,4.676C219.46,13.794,221.264,20.094,223.131,26.452Zm-9.18-9.5L211.649,9l-.709-.006-2.611,7.965Z" transform="translate(-98.572 -0.038)" fill="#fff"/>
                                <path id="Path_207" dataname="Path 207" d="M106.64,19.708a34.354,34.354,0,0,0,.044,4.957c.365,2.346-.89,2.882-2.779,2.972-2.446.117-3.789-.77-3.838-2.82-.093-3.9-.036-7.8-.04-11.7q0-2.74,0-5.479c0-4.208.507-4.814,4.735-5.118a48.708,48.708,0,0,1,5.971-.021c5.359.274,8.825,3.593,8.91,8.424.09,5.164-3.047,8.338-8.746,8.773C109.593,19.793,108.276,19.708,106.64,19.708Zm-.1-8.762c-.01,3.512-.01,3.512,2.167,3.516,2.7,0,3.982-1.016,4.042-3.225.064-2.378-1.277-3.423-3.981-3.577C105.95,7.5,106.629,9.415,106.54,10.945Z" transform="translate(-48.791)" fill="#fff"/>
                                <path id="Path_208" dataname="Path 208" d="M57.455,14.343c0-2.908.153-5.826-.05-8.719-.169-2.407.929-3.05,3.033-3.025,2.685.033,3.656.776,3.681,3.184.045,4.319.02,8.639.028,12.958.006,3.44.009,3.441,3.382,3.446,1.5,0,3,.084,4.484-.02,1.988-.139,2.426,1.1,2.457,2.638.029,1.485-.534,2.62-2.273,2.626-3.821.012-7.643.06-11.462-.013-2.44-.047-3.249-1.691-3.271-3.853C57.433,20.49,57.457,17.416,57.455,14.343Z" transform="translate(-27.45 -0.092)" fill="#fff"/>
                            </g>
                        </svg>
                  </NavLink>
                </li>
                <div className="languageButton">
                    <Button onClick={() => handleClick('en')}>
                        <p className="EN">EN</p>
                    </Button> 
                    <Button onClick={() => handleClick('geo')}>
                        <p className="GE">GE</p>
                    </Button>
                </div>
            </ul>
            <ul className="ulNav">
              <li>
                  <NavLink className="navStyle" isActive={(match, location) => {
                      if(location.pathname === '/' || match) {
                          return true 
                      }
                      return false
                  }} to= "/Home"> {t('Data.Header.1')} </NavLink>
              </li>  
              <li>
                  <NavLink to= "/FOR BUSSINES"> {t('Data.Header.2')}  </NavLink>
              </li>
              <li>
                  <NavLink to= "/COMPANY"> {t('Data.Header.3')}  </NavLink>
              </li>
              <li className="liPersonalCabnet">
                  <NavLink className="aPersonalCabnet" to= "/PERSONAL CABNET"> {t('Data.Header.4')} </NavLink>
              </li>
          </ul>
      </nav>
    </div>
    
  );
}

export default Header;