
import CheckoutIcon from "../../assets/images/CheckoutIcon.png";

import './style.css';
export default function TooltipIcon() {
    return (
        <div className='tooltip-icon form-icon align-items-center d-flex mr-1'>
             <img src={CheckoutIcon} alt="Logo" />
            <div class="tooltiptext tooltip-div ">მინიმალური თანხა რომელიც სადაძღვეო კოპანიის მიერ არ ანაძღაურდება</div>
        </div>
    )
}