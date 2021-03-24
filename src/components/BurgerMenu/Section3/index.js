import { useState } from "react";

import Hauseicon from "../../../assets/images/Hauseicon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-bootstrap";
import Button from "../../Button";
import { useTranslation } from 'react-i18next';
import './style.css'

export default function Section3() {

    const { t, i18n } = useTranslation();

    function handleClick(lang) {
        i18n.changeLanguage(lang);
    }


    return (
        <div className='burgerMenu-Personal w-100'>
            <div className="d-flex justify-content-lg-start align-items-start flex-column">
                <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                    <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                    <NavLink className="Burger-color">Personal Cabnet</NavLink>
                </div>
                <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                    <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                    <NavLink className="Burger-color">Add Business Account</NavLink>
                </div>
                <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                    <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                    <NavLink className="Burger-color">Payment</NavLink>
                </div>
                <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                    <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                    <NavLink className="Burger-color">Statement</NavLink>
                </div>
                <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                    <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                    <NavLink className="Burger-color">Notifications</NavLink>
                </div>
                <div className="line w-100"></div>
                <div className=" language d-flex justify-content-around align-items-center w-25 ml-5 m-4">
                    <button className=' border-0' onClick={() => handleClick('geo')}>
                        <p className={`Lang-BurgerMenu ${i18n.language === 'geo' && 'activeLang'}`}>GE</p>
                    </button>
                    <button  className=' border-0' onClick={() => handleClick('en')}>
                        <p className={`Lang-BurgerMenu ${i18n.language === 'en' && 'activeLang'}`}>EN</p>
                    </button>
                </div>
            </div>
        </div >
    )
}