import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import IMG from '../../../components/Header/images/home-photo.png';
import './style.css';


export default function Section1() {
    
    const { t } = useTranslation();


    return (
      <React.Fragment>
        <div className="sectionOneDiv">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 sectionOneImg"
                src={IMG}
                alt="First slide"
                />
              <Carousel.Caption>
                <div className="component">
                  <div className="componentImg"></div>
                  <div>
                    <h1 className="componentH1">{t('Data.SectionOne.1')}</h1>
                    <div>
                    <div className='Section1-border-red'></div>
                      <p className="componentP">
                          {t('Data.SectionOne.2')}
                        <p>
                          {t('Data.SectionOne.3')}
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 sectionOneImg"
                src={IMG}
                alt="First slide"
                />
              <Carousel.Caption>
                <div className="component">
                  <div className="componentImg"></div>
                  <div>
                    <h1 className="componentH1">{t('Data.SectionOne.1')}</h1>
                    <div>
                    <div className='Section1-border-red'></div>
                      <p className="componentP">
                          {t('Data.SectionOne.2')}
                        <p>
                          {t('Data.SectionOne.3')}
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 sectionOneImg"
                src={IMG}
                alt="First slide"
                />
              <Carousel.Caption>
                <div className="component">
                  <div className="componentImg"></div>
                  <div>
                    <h1 className="componentH1">{t('Data.SectionOne.1')}</h1>
                    <div>
                    <div className='Section1-border-red'></div>
                      <p className="componentP">
                          {t('Data.SectionOne.2')}
                        <p>
                          {t('Data.SectionOne.3')}
                        </p>
                      </p>
                    </div>
                  </div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </React.Fragment>
    );
}