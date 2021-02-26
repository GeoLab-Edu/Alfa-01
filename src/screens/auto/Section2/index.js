
import Auto1 from '../../../assets/images/Auto1.svg';
import Auto2 from '../../../assets/images/Auto2.svg';
import Auto3 from '../../../assets/images/Auto3.svg';
import SVGICON2 from '../../../assets/images/SVGICON2.svg';

import './style.css';
export default function Section2() {
    return (
        <div className="sectionOne container">

            <div className='row'>
                <div className='col-4 pr-0 text-center position-relative'>
                    <img src={Auto1} alt="img" />
                    <p className='pt-2 '>ავტომობილის დაზღვევა</p>
                    <div className='svgicon position-absolute'> <img src={SVGICON2} alt="img" /> </div>
                </div>
                <div className='col-4 pr-3 text-center position-relative '>
                    <img src={Auto2} alt="img" />
                    <p className='pt-2'>პასუხისმგებლობის დაზღვევა</p>
                    <div className='svgicon position-absolute'> <img src={SVGICON2} alt="img" /> </div>
                </div>
                <div className='col-4 pr-3 text-center position-relative'>
                    <img src={Auto3} alt="img" />
                    <p className='pt-2'>მძღოლისა და მგზავრების დაზღვევა</p>
                    <div className='svgicon position-absolute'> <img src={SVGICON2} alt="img" /> </div>
                </div>

            </div>
        </div>


    )
}