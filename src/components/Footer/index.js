
import { useTranslation } from 'react-i18next';
import FooterLogo from '../../assets/images/footer-logo.svg';
import youtube from '../../assets/images/youtube.svg';
import FbIcon from '../../assets/images/Fb.svg';
import InIcon from '../../assets/images/In.svg';
import Apple from '../../assets/images/Apple.svg';
import Android from '../../assets/images/Android.svg';



import './style.css'


export default function Footer() {

    const { t } = useTranslation();

    return (
        <div className="footer background-color">
            <div className='container'>
                <div className='row logo-row'>

                    <div className=' left-box col-6'>
                        <img src={FooterLogo} alt="Logo" />
                    </div>

                    <div className='right-box d-flex align-items-center justify-content-end col-6'>

                        <img src={youtube} alt="Logo" />
                        <img src={FbIcon} alt="Logo" />
                        <img src={InIcon} alt="Logo" />

                    </div>

                </div>
                <div className='row'>

                    <div className='col-2 text'>
                        <h6>{t('Data.Footer.Individual.1')}</h6>
                        <p>{t('Data.Footer.Individual.2')}</p>
                        <p>{t('Data.Footer.Individual.3')}</p>
                        <p>{t('Data.Footer.Individual.4')}</p>
                        <p>{t('Data.Footer.Individual.5')}</p>
                        <p>{t('Data.Footer.Individual.6')}</p>

                    </div>
                    <div className='col-2 text'>
                        <h6>{t('Data.Footer.ForBussines.1')}</h6>
                        <p>{t('Data.Footer.ForBussines.2')}</p>
                        <p>{t('Data.Footer.ForBussines.3')}</p>
                        <p>{t('Data.Footer.ForBussines.4')}</p>
                        <p>{t('Data.Footer.ForBussines.5')}</p>
                        <p>{t('Data.Footer.ForBussines.6')}</p>
                        <p>{t('Data.Footer.ForBussines.7')}</p>
                    </div>
                    <div className='col-2 text'>
                        <h6>{t('Data.Footer.Company.1')}</h6>
                        <p>{t('Data.Footer.Company.2')}</p>
                        <p>{t('Data.Footer.Company.3')}</p>
                        <p>{t('Data.Footer.Company.4')}</p>
                        <p>{t('Data.Footer.Company.5')}</p>
                    </div>
                    <div className='col-2 text'>
                        <h6>{t('Data.Footer.Contact.1')}</h6>
                        <p>{t('Data.Footer.Contact.2')}</p>
                        <p>{t('Data.Footer.Contact.3')}</p>
                        <p>{t('Data.Footer.Contact.4')}</p>
                        <p>{t('Data.Footer.Contact.5')}</p>
                        <p>{t('Data.Footer.Contact.6')}</p>

                    </div>
                    <div className='col-2 text'>
                        <h6>{t('Data.Footer.Apps.1')}</h6>
                        <div className='App-store row justify-content-end'>
                            <img src={Apple} alt="Logo" />
                        </div>

                    </div>
                    <div className='col-2 text'>
                        <div className='App-store row justify-content-end'>
                            <img src={Android} alt="Logo" />
                        </div>

                    </div>

                </div>
                <div className='row text d-flex justify-content-between'>

                    <a href="https://www.example.com">{t('Data.Footer.Partners.1')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.2')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.3')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.4')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.5')}</a>
                    <a href="https://www.example.com">{t('Data.Footer.Partners.6')}</a>

                </div>
            </div>

        </div>

    )
}