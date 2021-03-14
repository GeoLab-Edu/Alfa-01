import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'



import './style.css';
import { useState } from 'react';
export default function ExpandableContent(props) {

    const [expanded, setExpanded] = useState(props.expanded)

    return (
        <div >
            <div className='header ' onClick={() => {
                setExpanded(!expanded)
            }}>
                <div className={`row background-size background-${props.background}`}>
                    <div className='d-flex align-items-center  col-6 justify-content-start '>
                        <img src={props.icon} alt="Logo" />
                        <p className='m-0 ml-2 text-white'>{props.title}</p>
                    </div>

                    <div className='d-flex col-6 align-items-center justify-content-end text-white faAngleDown'>
                        <FontAwesomeIcon icon={faAngleDown} />
                    </div>
                </div>
            </div>
            {expanded && <div className='body'>
                {props.children}
            </div>}
        </div>

    )
}