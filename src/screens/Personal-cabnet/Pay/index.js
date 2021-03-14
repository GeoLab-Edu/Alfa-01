
import { useState } from "react";

import Hauseicon from "../../../assets/images/Hauseicon.svg";
import Cabneticon1 from "../../../assets/images/Cabneticon1.svg";
import Cabneticon2 from "../../../assets/images/Cabneticon2.svg";
import Cabneticon3 from "../../../assets/images/Cabneticon3.svg";
import Cabneticon4 from "../../../assets/images/Cabneticon4.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Button from "../../../../src/components/Button";

import './style.css';
import { NavLink } from "react-bootstrap";

export default function Pay(props) {
    const [expanded, setExpanded] = useState(props.expanded)
    return (
        <div className='pay-row'>

            <div className={`cabnet-background-${props.background}`}>
                <div className='cabnet-white-box p-4'>
                    <div className='d-flex  dropdown-box justify-content-between align-items-center '>
                        <div className='d-flex '><img src={Hauseicon} alt="img" /> </div>
                        <div className='d-flex'><p className='m-0 text-white text-white-title'>ქონების დაზღვევა </p></div>
                        <a className='d-flex text-white' onClick={() => {
                            setExpanded(!expanded)
                        }}><FontAwesomeIcon icon={faAngleDown} /></a>

                    </div>

                    {expanded && <>
                        <div className='bg-white bg-white-box1 mt-2 p-3 text-left'>
                            <p className='color-text color-text1'>ქონების დაზღვევა</p>
                            <p className='color-text mb-1'>სახელი გვარი</p>
                            <p className='color-text mb-1'>მოქმედების ვადა 17/05/21</p>
                            <p className='color-text mb-3'>პოლისის ნომერი 897564778</p>

                            <p className='text-danger font-weight-bold'>34.00ლ</p>
                            <div className='text-center'> <Button title="გადახდა" type="small" /></div>

                            <NavLink className='color-text font-weight-bold text-left pl-0 pr-0 pb-0'>გადახდის მეთოდის შეცვლა</NavLink>
                        </div>

                        <div className='bg-white-box1 bg-white  mt-2 p-3  d-flex '>
                            <div className=' justify-content-between cabneticon '>
                                <div className='mb-3'><img src={Cabneticon1} alt="Logo" /></div>
                                <div className='mb-3'><img src={Cabneticon2} alt="Logo" /></div>
                                <div className='mb-3'><img src={Cabneticon3} alt="Logo" /></div>
                                <div className='mb-0'><img src={Cabneticon4} alt="Logo" /></div>
                            </div>
                            <div className='  justify-content-between'>
                                <p className='m-0 pay-title mb-3'>პირობები</p>
                                <p className='m-0 pay-title mb-3'>ხელშეკრულება</p>
                                <p className='m-0 pay-title mb-3'>ტარიფი</p>
                                <p className='m-0 pay-title mb-0'>ისტორია</p>
                            </div>

                        </div>
                    </>}
                </div>

            </div>
        </div >
    )
}