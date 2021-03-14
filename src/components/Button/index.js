import './style.css';

export default function Button({ type = '', title }) {
    return (
        <div className='justify-content-center d-flex'>
            <button className={`button-buy   text-center button-${type}`}>{title}</button>
        </div>

    )
}