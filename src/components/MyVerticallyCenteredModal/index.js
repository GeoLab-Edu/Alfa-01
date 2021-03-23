

import { Modal } from 'react-bootstrap';

import './style.css';
export default function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className='pt-0'>
                {props.children}
            </Modal.Body>
        </Modal>
    );
}