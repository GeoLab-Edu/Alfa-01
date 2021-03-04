import './style.css';
import  Telephone from '../../assets/photo/phonelink_ring-24px.svg';
import  Message from '../../assets/photo/icons.svg';
import  Search from '../../assets/photo/search-24px (1).svg';
import { useTranslation } from 'react-i18next';

export default function Contact() {

    const { t } = useTranslation();

    return (
        <div className="index position-fixed r-0 d-flex mt justify-content-end">
            <div className="d-flex align-items-start h-w justify-content-around flex-column bd-highlight flex-nowrap">
                <div className="d-flex align-items-center background transform rounded">
                    <img className='imgage ml-3' src={Telephone} alt="Logo" />
                    <p className="text-white align-middle ml-3 mb">0322567898</p>
                </div>
                <div className="d-flex align-items-center background2 transform rounded">
                    <img className='imgage ml-3' src={Message} alt="Logo" />
                    <p className="text-white align-middle ml-3 mb">{t("Data.Contact.1")}</p>
                </div>
                <div className="d-flex align-items-center align-items-start background transform rounded">
                    <img className='imgage align-middle ml-3' src={Search} alt="Logo" />
                    <p className="text-white align-middle ml-3 mb">{t("Data.Contact.2")}</p>
                </div>
            </div>
        </div>
    )
}