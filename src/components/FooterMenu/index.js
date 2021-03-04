

import './style.css';



export default function FooterMenu(props) {
    return <div key="props" className='col-2 text'>
        <h6 key="title">{props.title}</h6>
        {props.items.map(item => {
            return <p>{item}</p>
            
        })}
    </div>
}