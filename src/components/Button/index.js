import { propTypes } from 'react-bootstrap/esm/Image';
import './style.css';

export default function Button({ type = '', title, onClick }) {
    return (
        <div className='justify-content-center d-flex'>
            <button className={`button-buy   text-center button-${type}`} onClick={onClick}>{title}</button>
        </div>

    )
}