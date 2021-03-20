
import { useState } from 'react';
import { NavLink } from 'react-bootstrap';

import { Form } from 'react-bootstrap';
import Button from '../Button';

import MyVerticallyCenteredModal from '../MyVerticallyCenteredModal';
import TooltipIcon from '../TooltipIcon';

import './style.css';
export default function AddPeoples() {
    const [modalShow, setModalShow] = useState(false);


    return (
        <div className='container'>
            <p className='size22'>უფლებამოსილი მძღოლები</p>

            <div className='addpeoples-box p-3'>
                <div className='d-flex'>
                    <p className='size22 m-0 mb-1' >სახელი გვარი</p>
                    <TooltipIcon />
                </div>
                <p className='m-0'>01100187786</p>
                <p >28/05/97//</p>
            </div>
            <NavLink className='addpeoples-box p-3 mt-3 mb-3 addpeoples-box2' onClick={() => setModalShow(true)}>
                <p>მძღოლის დამატება +</p>
            </NavLink>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <div className='modalshow p-3'>
                    <p className='text-center size22'>
                        მძღოლის დამატება
                </p>
                    <div className='row align-items-center justify-content-center mt-2 mb-3'>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='mr-5 m-0'>მდედრობითი</Form.Label>
                        </>
                        <>

                            <Form.Check type="radio" aria-label="radio 1" />
                            <Form.Label className='m-0'>მამრობითი</Form.Label>
                        </>

                        {/* form */}



                    </div>
                    <div className='d-flex justify-content-center row '>
                        <div className=' col-6'>
                            <Form.Group >
                                <Form.Label htmlFor="disabledTextInput">პირადი ნომერი</Form.Label>
                                <Form.Control id="disabledTextInput" placeholder="01100178876" />
                            </Form.Group>

                            <Form.Group >
                                <Form.Label htmlFor="disabledTextInput">სახელი</Form.Label>
                                <Form.Control id="disabledTextInput pr-0" placeholder="" />
                            </Form.Group>


                        </div>
                        <div className=' col-6'>

                            <Form.Group >
                                <Form.Label htmlFor="disabledTextInput">დაბადების თარიღი</Form.Label>
                                <Form.Control id="disabledTextInput " placeholder="DD/MM/YY" />
                            </Form.Group>
                            <Form.Group >
                                <Form.Label htmlFor="disabledTextInput">გვარი</Form.Label>
                                <Form.Control className='input-form' id="disabledTextInput pr-0" placeholder="" />
                            </Form.Group>

                        </div>

                    </div>


                    <p className='form-group-text'>*იმ შემთხვევაში, თუ თქვენ არ ფლობთ მართვის მოწმობას, მიუთითეთ სხვა პიროვნება ვინც გსურთ,
                     რომ იყოს თქვენს მიერ დაზღვეული ავტომობილის უფლებამოსილი მძღოლი</p>
                    <div className='mb-3'>
                        <Button type='white' title='შენახვა ' />
                    </div>


                </div>

            </MyVerticallyCenteredModal>
        </div>
    )
}


