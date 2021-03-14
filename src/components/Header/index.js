import React from 'react';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

import Mask from './images/Mask Group 1.svg';
import  Headerlogo from '../../assets/images/Headerlogo.svg';
import { useTranslation } from 'react-i18next';

import './style.css';


function Header() {

    const { t, i18n } = useTranslation();
    
    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }



    return (
        <React.Fragment>
            <div className="header container">
                <nav className="navigation container d-flex  justify-content-between">
                    <div className="ulLogo">
                        <div>
                            <NavLink className="logo" to="/Home">
                                <img className='headerimg' src={Headerlogo} alt="Logo" />
                            </NavLink>
                            
                        </div>
                        <div className="languageButton ml-4">
                            <Button onClick={() => handleClick('en')}>
                                <p className="EN">EN</p>
                            </Button>
                            <Button onClick={() => handleClick('geo')}>
                                <p className="GE">GE</p>
                            </Button>
                        </div>
                    </div>
                    <ul className="ulNav">
                        <li>
                            <NavLink className="navStyle Nav-a" to="/Home"> {t('Data.Header.1')} </NavLink>
                        </li>
                        <li>
                            <NavLink className="navStyle Nav-a" to="/FOR BUSSINES"> {t('Data.Header.2')}  </NavLink>
                        </li>
                        <li>
                            <DropdownButton
                                menuAlign="right"
                                title={t('Data.Header.3')}
                                className="navStyle Nav-a"
                            >
                                <div className="Dropdown-div">
                                    <div className="Dropdown-items">
                                        <Dropdown.Item eventKey="1">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section1.1')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="2">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section1.2')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section1.3')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section1.4')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="5">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section1.5')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="6">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section1.6')} </NavLink>
                                        </Dropdown.Item>
                                    </div>
                                    <div className="Dropdown-items">
                                        <Dropdown.Item eventKey="1">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section2.1')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="2">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/auto"> {t('Data.Dropdown.Section2.2')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section2.3')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section2.4')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="5">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section2.5')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="6">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section2.6')} </NavLink>
                                        </Dropdown.Item>
                                    </div>
                                    <div className="Dropdown-items">
                                        <Dropdown.Item eventKey="1">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="#"> {t('Data.Dropdown.Section3.1')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="2">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section3.2')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="3">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section3.3')} </NavLink>
                                        </Dropdown.Item>
                                        <Dropdown.Item eventKey="4">
                                            <img className="Mask" alt="error" src={Mask} />
                                            <NavLink className="Dropdown-a" to="/COMPANY"> {t('Data.Dropdown.Section3.4')} </NavLink>
                                        </Dropdown.Item>
                                    </div>
                                </div>
                            </DropdownButton>
                        </li>
                        <li>
                            <NavLink className="aPersonalCabnet Nav-a" to="/personal-cabnet"> {t('Data.Header.4')}  </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
}

export default Header;