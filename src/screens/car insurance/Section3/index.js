import { Col, Form, FormControl, InputGroup, NavLink, Pagination, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Section3(){

  const { t } = useTranslation();



    return(

        <div className="fluid-container">
        <div className='cabnet-background position-relative'>

        </div>
        <div className='clip-div-cabnet auto-clip-position position-absolute'>
        
        </div>
        <div className='container'>

            <NavLink className='position-absolute auto-clip-text-position main-link text-white' to="/Home">
                CAR INSURANCE-PARTIAL
            </NavLink>
        </div>
        <div className="container">
            <div className="d-flex mt-5 justify-content-center align-items-center">
                <div className="max-width">
                    <div className="d-flex justify-content-between align-items-center flex-column">
                        <div className="w d-flex b-color-active justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <p>Start</p>
                    </div>
                    <div className="w-space mb-5 b-color-active-text"></div>
                    <div className="d-flex justify-content-between align-items-center flex-column">
                        <div className="w p-3 b-color-active d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon icon={faCheck} />
                        </div>
                        <p>Policy</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-column">
                        <div className="w p-3 b-color-active d-flex justify-content-center align-items-center">
                            <h1>3</h1>
                        </div>
                        <p>Drivers</p>
                    </div>
                </div>
            </div>
                <h5>AUTHORIZED DRIVERS</h5>
            <div className="d-flex shadow w-25 p-3 flex-start justify-content-start align-items-start flex-column">
                <p className="font-size text-c-grey">Name Lastname</p>
                <p className="mb-0 text-c-grey">01100187786</p>
                <p className="mb-0 text-c-grey">28/05/97</p>
            </div>
            <div>
                <div className="d-flex mt-5 flex-column b-c-insurance-price justify-content-center align-items-center w-100 h-auto p-3">
                    <h3 className="text-c mb-3">Insurance Price</h3>
                    <div className="d-flex justify-content-between align-items-center w-50">
                        <p className="text-c">Insurance whole cost:</p>
                        <p className="text-c">211.2$</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center w-50">
                        <p className="text-c">Insurance whole cost (with discount):</p>
                        <p className="text-c">179.52$</p>
                    </div>
                </div>
                <div className="d-flex mt-5 flex-column justify-content-center align-items-center w-100 h-auto">
                    <p className="text-c-grey">Price to be payed:</p>
                    <h3 className="text-c-grey">46.85 Gel</h3>
                </div>
                <div className="d-flex mt-5 justify-content-center align-items-center">
                    <Pagination>
                        <Pagination.Prev />
                        <NavLink className="text-c-black" href="/auto-insurance/Checkout-step2">back</NavLink>
                    </Pagination>
                    <Pagination>
                        <NavLink className="text-c b-c-next p-left-right" href="/auto-insurance/Checkout-step3">Next</NavLink>
                    </Pagination>
                </div>

            </div>
        </div>
    </div>
)
}