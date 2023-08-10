import React from 'react'
import styled from 'styled-components';
import Column from '../column/Column';

export default function Timer() {
  return (
    <Column gap='6rem'>
      <Container>
      <div className='inside'>
        60:00
      </div>
      </Container>
      <States>
        <State isActive={true}>
          Hyula
        </State>
        <State>
          Hyula
        </State>
        <State>
          Hyula
         </State>
      </States>
    </Column>
  )
}

const Container = styled.div`
  position: relative;
  font-size: 8rem;
  width: 380px;
  height: 380px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  color: ${({theme})=>theme.color.text.main};
  background: linear-gradient(134deg, #343b42 0.01%, #232930 100%);
  box-shadow: 13px 14px 12px -6px rgb(29 31 34 / 50%), -20px -20px 61px 0px rgb(79 84 88 / 25%), 19px 25px 92px -32px rgb(51 59 66 / 35%);
 
  .inside {
    z-index: 10;
    width: 85%;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: linear-gradient(143deg, #31383f, #202123);
  }

  &::after{
    content: "";
    z-index: 1;
    position: absolute;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background-color:#11cbdb75;
  }

`;

const States = styled.div`
  display: flex;
  padding: 8px;
  border-radius: 20px;
  box-shadow: inset 31px 31px 62px #0f0f0f,
   inset -31px -31px 62px #333333;


`;

const State = styled.div<{isActive?:boolean}>`
  flex: 1;
  text-align: center;
  padding: 2rem 3rem;
  border-radius: 10px;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${({isActive,theme}) => (
    isActive?theme.color.text.main:'currentColor'
  )};
  background-color: ${({isActive,theme}) => (
    isActive?theme.color.details.primary.base:'transparent'
  )};
`;
