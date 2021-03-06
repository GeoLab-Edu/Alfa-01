
import ConnectIcon from "../../../assets/images/Connect-icon.svg";
import ContactIcon2 from "../../../assets/images/Contact-icon2.svg";
import ContactIcon3 from "../../../assets/images/Contact-icon3.svg";
import ContactIcon4 from "../../../assets/images/Contact-icon4.svg";


import Content1 from "../Content1";
import Content2 from "../Content2";
import Content3 from "../Content3";
import Content4 from "../Content4";

import Mapimg from "../Map";


import ExpandableContent from "../ExpandableContent";

import './style.css';
export default function Section2() {

    return (

        <div className=' container'>

            <ExpandableContent icon={ConnectIcon} title="კონტაქტი" background="contact1">
                <Content1 />
                <Mapimg/>
            </ExpandableContent>

            <ExpandableContent icon={ContactIcon2} title="ვინ ვართ ჩვენ" background="contact2" >
                <Content2 />
            </ExpandableContent>
            <ExpandableContent icon={ContactIcon3} title="ჩვენი ისტორია" background="contact3">
                <Content3 />
               
            </ExpandableContent>
            <ExpandableContent icon={ContactIcon4} title="კარიერა" background="contact4">
                <Content4 />
            </ExpandableContent>

        </div>
    )
};