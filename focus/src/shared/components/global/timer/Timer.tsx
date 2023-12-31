import React from 'react';
import styled from 'styled-components';
import Row from '../row/Row';
import CircularIconBtn from '../circular-icon-btn/CircularIconBtn';
import pageIcons from 'shared/utils/pageIcons';
import Column from '../column/Column';

export default function Timer() {
  return (
    <Container>
      <Column gap='2rem' alignItems='center'>
       <TimerContainer>
          <span className='timer'>22:00</span>
       </TimerContainer>
       <Row gap='1rem'>
         <CircularIconBtn Icon={pageIcons.Prev}/>
         <CircularIconBtn Icon={pageIcons.Play}/>
         <CircularIconBtn Icon={pageIcons.Next}/>
       </Row>
      </Column>
    </Container>
  )
}

const Container = styled.div`


`;

const TimerContainer = styled.div`
  position: relative;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;

  .timer{
    z-index: 2;
    font-size: 2.2rem;
  }

  &::before{
    content: "";
    z-index: 0;
    position: absolute;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background-color: #225079;
  }


 
`;