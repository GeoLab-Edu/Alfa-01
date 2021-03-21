import { Col, Form, FormControl, InputGroup, NavLink, Pagination, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Section2(){

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
                            <h1>2</h1>
                        </div>
                        <p>Policy</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center flex-column">
                        <div className="w p-3 b-color d-flex justify-content-center align-items-center">
                            <h1>3</h1>
                        </div>
                        <p>Drivers</p>
                    </div>
                </div>
            </div>
            <div className="d-flex shadow mt-5 p-5 justify-content-around align-items-center flex-column">
                <h4>Do you want to improve your policy?</h4>
                <InputGroup className="mt-5 w-100 d-flex justify-content-around align-items-center">
                    <p className="text-c-grey font-size">Driver and passengers accident insurance</p>   
                    <InputGroup.Prepend className="w-100">
                        <div className="d-flex w-100 justify-content-around align-items-center">
                            <fieldset className="w-100 d-flex justify-content-center align-items-center">
                                <Form.Group className="d-flex w-25 justify-content-center align-items-center" as={Row}>
                                    <Col className="text-c-grey d-flex justify-content-around align-items-center" sm={10}>
                                        <Form.Check
                                        type="radio"
                                        label="No"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                        type="radio"
                                        label="Yes"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>       
                        </div>
                    </InputGroup.Prepend>
                </InputGroup>
                <div className="d-flex justify-content-center align-items-center flex-column">
                    <p className="text-c-grey font-size">Driver and passengers insurance limit</p>
                    <InputGroup className="w-75 border-orange">
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Prepend>
                        <InputGroup.Text>USD</InputGroup.Text>
                        </InputGroup.Prepend>
                    </InputGroup>
                </div>
                <InputGroup className="mt-5 w-100 d-flex justify-content-around align-items-center">
                    <p className="text-c-grey font-size">Motor liability incsurance</p>   
                    <InputGroup.Prepend className="w-100">
                        <div className="d-flex w-100 justify-content-around align-items-center">
                            <fieldset className="w-100 d-flex justify-content-center align-items-center">
                                <Form.Group className="d-flex w-25 justify-content-center align-items-center" as={Row}>
                                    <Col className="text-c-grey d-flex justify-content-around align-items-center" sm={10}>
                                        <Form.Check
                                        type="radio"
                                        label="No"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                        type="radio"
                                        label="Yes"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>       
                        </div>
                    </InputGroup.Prepend>
                </InputGroup>
                <InputGroup className="mt-5 w-100 d-flex justify-content-around align-items-center">
                    <p className="text-c-grey font-size">Has unlimited drivers</p>   
                    <InputGroup.Prepend className="w-100">
                        <div className="d-flex w-100 justify-content-around align-items-center">
                            <fieldset className="w-100 d-flex justify-content-center align-items-center">
                                <Form.Group className="d-flex w-25 justify-content-center align-items-center" as={Row}>
                                    <Col className="text-c-grey d-flex justify-content-around align-items-center" sm={10}>
                                        <Form.Check
                                        type="radio"
                                        label="No"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                        />
                                        <Form.Check
                                        type="radio"
                                        label="Yes"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                        />
                                    </Col>
                                </Form.Group>
                            </fieldset>       
                        </div>
                    </InputGroup.Prepend>
                </InputGroup>
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
                        <NavLink className="text-c-black" href="/auto-insurance">back</NavLink>
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