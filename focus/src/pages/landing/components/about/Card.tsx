import React from 'react';
import styled from 'styled-components';
import Column from '../../../../shared/components/global/column/Column';
import { aboutIconsConfigT } from '../../../../config/about/aboutIcons';
import pageIcons from '../../../../shared/utils/pageIcons';





export default function Card({name,svg_icon}:aboutIconsConfigT) {

  const iconGradient = {
    backgroundImage: 'linear-gradient(45deg, #05D2FF, #253FE0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  return (
    <CardContainer>
      <Column gap='10px'>
        <div className='shadow-color'>
            <svg xmlns="http://www.w3.org/2000/svg" width="237" height="224" viewBox="0 0 237 224" fill="none">
            <g clip-path="url(#clip0_491_254)" filter="url(#filter0_f_491_254)">
              <path d="M141.828 60V163.79L176.401 142.66V74.4182L141.828 60ZM125.747 141.121L97.9091 150.449V69.0211L125.747 75.3437V141.121ZM60.523 138.729L81.8285 134.409V82.436L60.6245 79.8153L60.523 138.729Z" fill="#B1ADA4"/>
            </g>
          <defs>
            <filter id="filter0_f_491_254" x="-9.13351" y="0" width="255.191" height="223.79" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_491_254"/>
            </filter>
            <clipPath id="clip0_491_254">
              <rect width="135.191" height="103.79" fill="white" transform="translate(50.8665 60)"/>
            </clipPath>
          </defs>
          </svg>
        </div>

        <div className="icon">
          <pageIcons.Lock/>
        </div>  

       

        <span className='name'>
          {name}
        </span>

        </Column>
    </CardContainer>
  )
}

const CardContainer = styled.div`
  width: 260px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  border-top: 1px solid #f5fbf221;
  border-bottom: 1px solid #ffffff2e;
  border-left: 1px solid #f5fbf217;
  border-right: 1px solid #f5fbf22b;

  .icon {
    font-size: 3.2rem;
    text-align: center;
  

  }

  .name {
    width: 60%;
    padding-top: 1.4rem;
    margin: auto;
    font-size: 1.8rem;
    font-weight: 400;
    color: #bdf3ff;
  }

  .shadow-color {
    position: absolute;
    top: -78px;
    left: -30px;
    filter: blur(18px);
  }
`;
