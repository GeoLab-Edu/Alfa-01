

import './style.css';

export default function Button(props){
    return(
        <button className='button-buy text-center'>{props.title}</button>
    )
}