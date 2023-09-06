import React from 'react';
import styled from 'styled-components';
import Row from '../row/Row';
import Span from '../span/Span';
import {Image} from '@chakra-ui/react';

export default function ChallengerCard() {
  return (
    <Row alignItems='center' justifyContent='space-between' gap='12rem'>
      <Row alignItems='center' gap='1.4rem'>
         <Img src=''/>
         <Span color='text.gray.medium'>name</Span>
      </Row>
      <Span color='text.gray.medium'>22:00</Span>
    </Row>
  )
}

const Img = styled(Image)`
  width:24px;
  height:24px;
  border-radius: 50%;
`;