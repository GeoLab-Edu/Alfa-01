import CheckoutIcon from "../../assets/images/CheckoutIcon.png";

import { Form } from 'react-bootstrap';
import TooltipIcon from '../TooltipIcon';

import './style.css';
export default function FromBox1() {
    return (
        <div className='container'>
            <h5 className='text-center formbox-title'>
                გსურთ სადაზღვეო პაკეტის გაუმჯობესება?
            </h5>
            <div className='row justify-content-center'>
                <div className='paybox-form1 section3-box   justufy-items-center '>

                    <div className='d-flex justify-content-center'>
                        <p className=' m-0 '>მძღოლისა და მგზავრების უბედური შემთხვევისგან დაზღვევა </p>
                        <TooltipIcon />
                    </div>

                    <div className='d-flex align-items-center justify-content-center mt-2'>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='mr-5 m-0'>არა</Form.Label>
                        </>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='m-0'>დიახ</Form.Label>
                        </>

                    </div>
                    <p className='text-center mt-3'>მძღოლისა და მგზავრების დაზღვევის ანაზღაურების ლიმიტი</p>
                    <div className='d-flex justify-content-center'>
                        <div className='form-box d-flex '>
                            <Form.Control id="disabledTextInput" placeholder="2500" />
                            <div className='line-form'>
                                <p className='usd'>USD</p>
                            </div>
                        </div>
                    </div>









                </div>
            </div>

            {/* yes/no1 */}

            <div className='row justify-content-center mt-2'>
                <div className='paybox-form1 section3-box  justufy-items-center'>
                    <div className='d-flex justify-content-center'>
                        <p className=' m-0 '>ავტო პასუხისმგებლობის დაზღვევა </p>
                        <TooltipIcon />
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-2'>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='mr-5 m-0'>არა</Form.Label>
                        </>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='m-0'>დიახ</Form.Label>
                        </>

                    </div>
                </div>
            </div>

            {/* yes/no 2 */}
            <div className='row justify-content-center mt-2 mb-5'>
                <div className='paybox-form1 section3-box  justufy-items-center'>
                    <div className='d-flex justify-content-center'>
                        <p className=' m-0 '>შეუზღუდავი უფლებამოსილი მძღოლები </p>
                        <TooltipIcon />
                    </div>
                    <div className='d-flex align-items-center justify-content-center mt-2'>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='mr-5 m-0'>არა</Form.Label>
                        </>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='m-0'>დიახ</Form.Label>
                        </>

                    </div>
                </div>
            </div>

        </div>
    )
}