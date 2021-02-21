import { useTranslation } from 'react-i18next';
import './style.css';
import IMG1 from '../../../components/Header/images/1.png';
import SVG1 from '../../../components/Header/images/1.svg';
import IMG2 from '../../../components/Header/images/2.png';
import SVG2 from '../../../components/Header/images/2.svg';
import IMG3 from '../../../components/Header/images/3.png';
import SVG3 from '../../../components/Header/images/3.svg';
import IMG4 from '../../../components/Header/images/4.png';
import SVG4 from '../../../components/Header/images/4.svg';
import IMG5 from '../../../components/Header/images/5.png';
import IMG6 from '../../../components/Header/images/6.png';
export default function SectionTwo(){

    const { t } = useTranslation();

    return(
        <div className="sectionOne">
            <div className="sectionTwo">
                <h1 className="sectionTwoH1">{t('Data.SectionTwo.title.1')}</h1>
                <p>{t('Data.SectionTwo.title.2')}</p>
                <p>{t('Data.SectionTwo.title.3')}</p>
            </div>
            <div className="sectionThree">
                <div className="sectionFour">
                    <div className="sectionFive">
                        <span className="sectionTwoSpan1">
                            <img className="sectionTwoImg" alt="error" src={IMG1}/>
                            <img className="sectionTwoSvg" alt="error" src={SVG1}/>
                            <h3 className="sectionTwoH3">{t('Data.SectionTwo.insurance.1')}</h3>
                        </span>
                        <span className="sectionTwoSpan1">
                            <img className="sectionTwoImg" alt="error" src={IMG2}/>
                            <img className="sectionTwoSvg" alt="error" src={SVG2}/>
                            <h3 className="sectionTwoH3">{t('Data.SectionTwo.insurance.2')}</h3>
                        </span>
                        <span className="sectionTwoSpan1">
                            <img className="sectionTwoImg" alt="error" src={IMG3}/>
                            <img className="sectionTwoSvg" alt="error" src={SVG3}/>
                            <h3 className="sectionTwoH3">{t('Data.SectionTwo.insurance.3')}</h3>
                        </span>
                    </div>
                    <div className="sectionFive">
                        <span className="sectionTwoSpan2">
                            <img className="sectionTwoImg" alt="error" src={IMG4}/>
                            <img className="sectionTwoSvg" alt="error" src={SVG4}/>
                            <h3 className="sectionTwoH3Two">{t('Data.SectionTwo.insurance.4')}</h3>
                        </span>
                        <span className="sectionTwoSpan2">
                            <img className="sectionTwoImg" alt="error" src={IMG5}/>
                            <img className="sectionTwoSvg" alt="error" src={SVG1}/>
                            <h3 className="sectionTwoH3Two">{t('Data.SectionTwo.insurance.5')}</h3>
                        </span>
                        <span className="sectionTwoSpan2">
                            <img className="sectionTwoImg" alt="error" src={IMG6}/>
                            <img className="sectionTwoSvg" alt="error" src={SVG2}/>
                            <h3 className="sectionTwoH3Two">{t('Data.SectionTwo.insurance.6')}</h3>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}