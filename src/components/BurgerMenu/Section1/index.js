import { useState } from "react";

import Hauseicon from "../../../assets/images/Hauseicon.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faHome } from '@fortawesome/free-solid-svg-icons';
import Button from "../../Button";
import { NavLink } from "react-bootstrap";
import './style.css'

export default function Section1(props) {
    const [expanded, setExpanded] = useState(props.expanded)
    return (
        <div className='burgerMenu-Personal w-100'>

            <div className={`cabnet-background-${props.background}`}> 
                <div className='cabnet-white-box'>
                    <div className='d-flex dropdown-box align-items-center mt-5'>
                        <div className='p-3 d-flex ml-5'><FontAwesomeIcon className="Burger-color" icon={faHome}/> </div>
                        <div className=''><p className='m-0 flex-auto text-c-black'>Personal</p></div>
                        <a className='d-flex w-75 flex-row-reverse mr-5' onClick={() => {
                            setExpanded(!expanded)
                        }}><FontAwesomeIcon className='text-c-black' icon={faAngleDown} /></a>
                    </div>
                        <div className="line w-100"></div>

                    {expanded && <>
                        <div className="d-flex justify-content-lg-start align-items-start flex-column">
                            <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                            <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                                <NavLink className="BurgerMenu-Personal-menu">Helath</NavLink>
                            </div>
                            <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                                <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                                <NavLink className="BurgerMenu-Personal-menu">Auto</NavLink>
                            </div>
                            <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                                <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                                <NavLink className="BurgerMenu-Personal-menu">Travel</NavLink>
                            </div>
                            <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                                <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                                <NavLink className="BurgerMenu-Personal-menu">Property</NavLink>
                            </div>
                            <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                                <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                                <NavLink className="BurgerMenu-Personal-menu">Bank</NavLink>
                            </div>
                            <div className="d-flex ml-5 justify-content-center align-items-center p-3">
                                <FontAwesomeIcon className="Burger-color" icon={faHome}/>
                                <NavLink className="BurgerMenu-Personal-menu">Other</NavLink>
                            </div>
                            <div className="line w-100"></div>
                        </div>
                    </>}
                </div>

            </div>
        </div >
    )
}