import { Button, Col, Form, FormControl, InputGroup, NavLink, Pagination, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import './style.css';
import Personalimg from '../../../assets/images/Personalimg.svg';

export default function Section1(){

  const { t } = useTranslation();



    return(

        <div className="fluid-container">
            <div className='cabnet-background position-relative'>

            </div>
            <div className='clip-div-cabnet auto-clip-position position-absolute'>
            
            </div>
            <div className='container'>
                <h1 className="position-absolute auto-clip-text-position main-link text-white">
                    CAR INSURANCE-PARTIAL
                </h1>
            </div>

            <div className="container">
                <div className="d-flex mt-5 justify-content-center align-items-center">
                    <div className="max-width">
                        <div className="d-flex justify-content-between align-items-center flex-column">
                            <div className="w d-flex b-color-active justify-content-center align-items-center">
                                <h1>1</h1>
                            </div>
                            <p>Start</p>
                        </div>
                        <div className="w-space mb-5 b-color-active-text"></div>
                        <div className="d-flex justify-content-between align-items-center flex-column">
                            <div className="w p-3 b-color d-flex justify-content-center align-items-center">
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
                    <h4>Insurance Type</h4>
                    <InputGroup className="mt-5 w-100 d-flex justify-content-around align-items-center">
                        <InputGroup.Prepend className="w-100">
                            <div className="d-flex w-100 justify-content-around align-items-center">
                                <fieldset className="w-100 d-flex justify-content-center align-items-center">
                                    <Form.Group className="d-flex w-50 justify-content-center align-items-center" as={Row}>
                                        <Col className="d-flex justify-content-around align-items-center" sm={10}>
                                            <Form.Check
                                            type="radio"
                                            label="Complate"
                                            name="formHorizontalRadios"
                                            id="formHorizontalRadios1"
                                            />
                                            <Form.Check
                                            type="radio"
                                            label="Partial"
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
                <div className="d-flex shadow mt-5 p-5 justify-content-around align-items-center flex-column">
                    <h4 className="text-decoration">Partial Auto Insurance</h4>
                    <div className="d-flex justify-content-around w-75 mt-5 align-items-center  flex-column">
                        <div className="res-column d-flex w-75 justify-content-between align-items-center">
                            <div>
                                <p>Value</p>
                                <InputGroup className="mt-3 w-120 border-orange">
                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>USD</InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </div>
                            <div>
                                <p>Vehicule Type</p>
                                <InputGroup className="mt-3 w-120 border-orange">
                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                </InputGroup>
                            </div>
                        </div>
                        <div className="res-column d-flex w-75 justify-content-between align-items-center">
                            <div>
                                <p className="m-0 mt-3">Date of issue</p>
                                <InputGroup className="w-120 border-orange">
                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>USD</InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </div>
                            <div>
                                <p className="m-0 mt-3">Client Age</p>
                                <InputGroup className="w-120 border-orange">
                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                </InputGroup>
                            </div>
                        </div>
                        <div className="res-column d-flex w-75 justify-content-between align-items-center">
                            <div>
                                <p className="m-0 mt-3">Payment schedule</p>
                                <InputGroup className="w-120 border-orange">
                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                    <InputGroup.Prepend>
                                    <InputGroup.Text>USD</InputGroup.Text>
                                    </InputGroup.Prepend>
                                </InputGroup>
                            </div>
                            <div>
                                <p className="m-0 mt-3">Deductible</p>
                                <InputGroup className="mt-0 w-120 border-orange">
                                    <FormControl aria-label="Amount (to the nearest dollar)" />
                                </InputGroup>
                            </div>
                        </div>
                    </div>
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
                            <NavLink className="text-c-black" href="/auto">back</NavLink>
                        </Pagination>
                        <Pagination>
                            <NavLink className="text-c b-c-next p-left-right" href="auto-insurance/Checkout-step2">Next</NavLink>
                        </Pagination>
                    </div>

                </div>
            </div>
        </div>
    )
}