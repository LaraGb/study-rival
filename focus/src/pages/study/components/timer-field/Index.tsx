import React from 'react';
import Column from 'shared/components/global/column/Column';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import Row from 'shared/components/global/row/Row';
import Span from 'shared/components/global/span/Span';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton';
import Timer from 'shared/components/global/timer/Timer';
import styled from 'styled-components';

export default function Index() {
  return (
    <Column alignItems='center' gap='1.6rem'>
      <TimerField>
        <Timer/>
        <Row>
          <TimerControlBtn>Start</TimerControlBtn>
          <TimerControlBtn>Stop</TimerControlBtn>
          <TimerControlBtn>Next</TimerControlBtn>
        </Row>
      </TimerField>
      <Column alignItems='center' gap='2rem'>
         <Paragraph>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae, nulla maiores beatae nemo quos maxime quis minus quo placeat, sunt tempora repellendus commodi eligendi, nostrum odit quas dolorum! Nisi, officia.
         </Paragraph>
         <Row gap='2rem'>
            <div>
              <Span fontSize='1.8rem'>Time</Span>
              <NumberInput/>
            </div>
            <div>
              <Span fontSize='1.8rem'>Time</Span>
              <NumberInput/>
            </div>
            <div>
              <Span fontSize='1.8rem'>Time</Span>
              <NumberInput/>
            </div>
         </Row>
      </Column>
    </Column>
  )
}

const TimerField = styled.div`
 padding: 20px 10px;
 width: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;

`;

const TimerControlBtn = styled.button`
 padding: 10px 20px;
 cursor: pointer;
`;

const NumberInput = styled.input.attrs({type:'number'})`
 width: 90px;
 height: 40px;
 padding: 0px 6px;
 border: none;
 border-radius: 6px;
 color: black;
 background-color: #80808050;
 
`;