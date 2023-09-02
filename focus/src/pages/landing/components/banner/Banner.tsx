import React from 'react'
import Column from 'shared/components/global/column/Column';
import Container from 'shared/components/global/container/Container';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import RowToColumn from 'shared/components/global/row-to-column/RowToColumn';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton';
import Title from 'shared/components/global/title/Title';
import styled from 'styled-components';
import img from 'assets/background/image 114.png'
import Span from 'shared/components/global/span/Span';
import pageTheme from 'styles/pageTheme';
import hero from 'assets/animations/hero.json';
import LottiePlayer from 'shared/components/motion/lottie-player/LottiePlayer';


export default function Banner() {
  return (
    <Container background='radial-gradient(#3e1994, black 66%)'>
      <RowToColumn>
      <Column maxWidth='560px' alignItems='start' gap='2rem'>
        <Span fontSize='2rem' fontWeight='bold' color={pageTheme.color.details.primary.base}>Melhore sua vida e melhore seu foco</Span>
        <Title textAlign='left'>Create design that is out-of-this-world.</Title>
        <Paragraph>
          Get access to unlimited courses and design resources to shoot your design career to the moon.
        </Paragraph>
        <StylizedButton>Get Start</StylizedButton>
      </Column>
      <Image src={img}/>
      </RowToColumn>
    </Container>
  )
}

const Image = styled.img`
 width: 100rem;
 transform: translateX(9em);
`;

