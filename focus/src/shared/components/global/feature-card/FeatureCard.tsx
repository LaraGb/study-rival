import React from 'react';
import styled from 'styled-components';
import Column from '../column/Column';
import SubTitle from '../subtitle/SubTitle';
import Paragraph from '../paragraph/Paragraph';

export default function FeatureCard() {
  return (
    <Column padding='16px' gap='4.2rem'>
       <Image src="https://cdnb.artstation.com/p/assets/images/images/026/577/541/large/laura-mei-space-bun.jpg?1589160364" alt="" />
       <Column alignItems='center' >
          <SubTitle>Play With Friends</SubTitle>
          <Paragraph textAlign='center'>
             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum ad expedita quis nobis sit dignissimos provident.
          </Paragraph>
       </Column>
    </Column>
  )
}


const Image = styled.img`
 width: 100%;
 max-height: 37rem;
 object-fit: cover;
 border-radius: 20px;
 background-color: black;
`;