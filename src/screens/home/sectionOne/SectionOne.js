import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { useTranslation } from 'react-i18next';
import IMG from '../../../components/Header/images/home-photo.png';
import './style.css';

export default function SectionOne() {
    
    const { t } = useTranslation();


    return (
      <div className="sectionOneDiv">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 sectionOneImg"
              src={IMG}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>ajsdasdjasdbjhabdjb</p>
              <svg id="Component_8_1" dataname="Component 8 – 1" xmlns="http://www.w3.org/2000/svg" width="900" height="200" viewBox="0 0 900 200">
                <path id="Path_79" dataname="Path 79" d="M10,0H900L860,190a10,10,0,0,1-10,10H10A10,10,0,0,1,0,190V10A10,10,0,0,1,10,0Z" fill="#110f0f" opacity="0.4"/>
                <g id="Group_219" dataname="Group 219" transform="translate(0 -341)">
                  <g id="slider" transform="translate(0 203)">
                    <text id="PROPERTY_INSURANCE" dataname="PROPERTY INSURANCE" transform="translate(142 203)" fill="#fff" fontSize="32" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500" letterSpacing="-0.025em"><tspan x="0" y="0">{t('Data.SectionOne.1')}</tspan></text>
                    <text id="To_avoid_the_unexpected_expenses_and_major_discomfort_choose_a_better_insurance_policy_for_your_home_and_continue_to_live_in_peace." dataname="To avoid the unexpected expenses and major discomfort choose a better insurance policy for your home and continue to live in peace." transform="translate(142 239)" fill="#fff" fontSize="18" fontFamily="Montserrat-Regular, Montserrat" letterSpacing="-0.025em"><tspan x="0" y="17">{t('Data.SectionOne.2')}</tspan><tspan x="0" y="47">{t('Data.SectionOne.3')}</tspan></text>
                  </g>
                  <rect id="Rectangle_182" dataname="Rectangle 182" width="541" height="2" transform="translate(142 428)" fill="#e84f5b"/>
                </g>
              </svg>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sectionOneImg"
              src={IMG}
              alt="First slide"
            />
            <Carousel.Caption>
              <svg id="Component_8_1" dataname="Component 8 – 1" xmlns="http://www.w3.org/2000/svg" width="900" height="200" viewBox="0 0 900 200">
                <path id="Path_79" dataname="Path 79" d="M10,0H900L860,190a10,10,0,0,1-10,10H10A10,10,0,0,1,0,190V10A10,10,0,0,1,10,0Z" fill="#110f0f" opacity="0.4"/>
                <g id="Group_219" dataname="Group 219" transform="translate(0 -341)">
                  <g id="slider" transform="translate(0 203)">
                    <text id="PROPERTY_INSURANCE" dataname="PROPERTY INSURANCE" transform="translate(142 203)" fill="#fff" fontSize="32" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500" letterSpacing="-0.025em"><tspan x="0" y="0">{t('Data.SectionOne.1')}</tspan></text>
                    <text id="To_avoid_the_unexpected_expenses_and_major_discomfort_choose_a_better_insurance_policy_for_your_home_and_continue_to_live_in_peace." dataname="To avoid the unexpected expenses and major discomfort choose a better insurance policy for your home and continue to live in peace." transform="translate(142 239)" fill="#fff" fontSize="18" fontFamily="Montserrat-Regular, Montserrat" letterSpacing="-0.025em"><tspan x="0" y="17">{t('Data.SectionOne.2')}</tspan><tspan x="0" y="47">{t('Data.SectionOne.3')}</tspan></text>
                  </g>
                  <rect id="Rectangle_182" dataname="Rectangle 182" width="541" height="2" transform="translate(142 428)" fill="#e84f5b"/>
                </g>
              </svg>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sectionOneImg"
              src={IMG}
              alt="First slide"
            />
            <Carousel.Caption>
              <svg id="Component_8_1" dataname="Component 8 – 1" xmlns="http://www.w3.org/2000/svg" width="900" height="200" viewBox="0 0 900 200">
                <path id="Path_79" dataname="Path 79" d="M10,0H900L860,190a10,10,0,0,1-10,10H10A10,10,0,0,1,0,190V10A10,10,0,0,1,10,0Z" fill="#110f0f" opacity="0.4"/>
                <g id="Group_219" dataname="Group 219" transform="translate(0 -341)">
                  <g id="slider" transform="translate(0 203)">
                    <text id="PROPERTY_INSURANCE" dataname="PROPERTY INSURANCE" transform="translate(142 203)" fill="#fff" fontSize="32" fontFamily="Montserrat-Medium, Montserrat" fontWeight="500" letterSpacing="-0.025em"><tspan x="0" y="0">{t('Data.SectionOne.1')}</tspan></text>
                    <text id="To_avoid_the_unexpected_expenses_and_major_discomfort_choose_a_better_insurance_policy_for_your_home_and_continue_to_live_in_peace." dataname="To avoid the unexpected expenses and major discomfort choose a better insurance policy for your home and continue to live in peace." transform="translate(142 239)" fill="#fff" fontSize="18" fontFamily="Montserrat-Regular, Montserrat" letterSpacing="-0.025em"><tspan x="0" y="17">{t('Data.SectionOne.2')}</tspan><tspan x="0" y="47">{t('Data.SectionOne.3')}</tspan></text>
                  </g>
                  <rect id="Rectangle_182" dataname="Rectangle 182" width="541" height="2" transform="translate(142 428)" fill="#e84f5b"/>
                </g>
              </svg>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
}