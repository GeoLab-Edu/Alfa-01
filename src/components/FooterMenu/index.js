

import './style.css';



export default function FooterMenu(props) {
    return <div className='col-2 text'>
        <h6>{props.title}</h6>
        {props.items.map(item => {
            return <p>{item}</p>
        })}
    </div>
}