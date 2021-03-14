
import Mapimg from '../../../assets/images/Mapimg.svg'

import './style.css';
export default function Map() {
    return (
        <div className='fluid-container'>
            <div className='map-background '>
                <img className='w-100' src={Mapimg} alt="Logo" />
            </div>
        </div>

    )
}