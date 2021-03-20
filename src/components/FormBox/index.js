

import CheckoutIcon from "../../assets/images/CheckoutIcon.png";

import { Form } from 'react-bootstrap';
import './style.css';
import TooltipIcon from "../TooltipIcon";

export default function FormBox() {
    return (
        <div className='container  '>
            <div className='row justify-content-center'>
                <div className='paybox-form1 section3-box  justufy-items--center '>


                    <p className='text-center  pay-text'>როგორი დაზღვევა გსურთ?</p>
                    <div className='d-flex align-items-center justify-content-center '>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='mr-5 m-0'>სრული</Form.Label>
                        </>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='m-0'>ნაწილობრივი</Form.Label>
                        </>

                    </div>

                </div>
                <div className='paybox-form2 section3-box  justufy-items--center mt-3 '>
                    <p className='text-center  pay-text'>ნაწილობრივი და ავტო დაზღვევა</p>
                    <div className='row justify-content-center '>

                        <fieldset enabl>
                            <div className='d-flex'>
                                <div className='mr-3'>

                                    <Form.Group>
                                        <Form.Label htmlFor="disabledTextInput"> ავტომობილის ღირებულება</Form.Label>
                                        <div className='form-box d-flex'>
                                            <Form.Control id="disabledTextInput" placeholder="2500" />
                                            <div className='line-form'>
                                                <p className='usd'>USD</p>
                                            </div>
                                        </div>

                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="disabledTextInput">გამოშვების წელი</Form.Label>
                                        <Form.Control id="disabledTextInput" placeholder="2007" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="disabledTextInput">გადახდის გრაფიკი</Form.Label>
                                        <Form.Control id="disabledTextInput" placeholder="ყოველთვიური გადახდა" />
                                    </Form.Group>

                                </div>
                                <div>

                                    <Form.Group>
                                        <Form.Label htmlFor="disabledTextInput">ავტომობილის ტიპი</Form.Label>
                                        <Form.Control id="disabledTextInput" placeholder="კუპე" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="disabledTextInput">დამზღვევის ასაკი</Form.Label>
                                        <Form.Control id="disabledTextInput" placeholder="24" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label htmlFor="disabledTextInput">ფრანშიზა </Form.Label>
                                        <div className='form-box d-flex'>
                                            <Form.Control id="disabledTextInput" placeholder="2500" />
                                            <div className='tooltip-icon form-icon align-items-center d-flex mr-1'>
                                                <TooltipIcon/>
                                                <div class="tooltiptext  ">მინიმალური თანხა რომელიც სადაძღვეო კოპანიის მიერ არ ანაძღაურდება</div>
                                            </div>
                                        </div>

                                    </Form.Group>

                                </div>

                            </div>

                        </fieldset>
                    </div>


                </div>
            </div>

        </div>
    )
}