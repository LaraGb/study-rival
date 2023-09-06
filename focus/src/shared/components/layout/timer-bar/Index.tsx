import React from 'react';
import Column from 'shared/components/global/column/Column';
import Timer from 'shared/components/global/timer/Timer';
import Span from 'shared/components/global/span/Span';
import pageTheme from 'styles/pageTheme';
import Row from 'shared/components/global/row/Row';
import ChallengerCard from 'shared/components/global/challenger-card/ChallengerCard';
import styled from 'styled-components';
import breakPoints from 'styles/breakPoints';

export default function Index() {
  return (
    <Container>
        <Column>
              <Timer/>
               <Span 
                  fontSize={pageTheme.fontSize.text_xl} 
                  fontWeight='bold' 
                  color={pageTheme.color.text.main.dark}
                >
                  Hello Alfred Bryant
               </Span>
               <Span fontWeight='bold'>Lorem ipsum dolor sit.</Span>
        </Column>
        <Column alignItems='start' gap='2.4rem'>
              <Row justifyContent='space-between' width='100%'>
               <Span fontWeight={600} color='text.gray.medium'>Desafiantes</Span>
               <Span fontWeight={600} color='text.gray.medium'>Time</Span>
              </Row>
              <Column gap='2.4rem'>
                <ChallengerCard/>
                <ChallengerCard/>
                <ChallengerCard/>
                <ChallengerCard/>
              </Column>
        </Column>
    </Container>
  )
}

const Container = styled.div`
 display: flex;
 flex-direction: column;
 gap: 4rem;

 @media (max-width:${breakPoints.xl}){
   flex-direction: row;
 }
`;