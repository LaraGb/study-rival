import React from 'react';
import styled from 'styled-components';
import {IconType} from 'react-icons';

export default function CircularIconBtn({Icon}:{Icon:IconType}) {
  return (
    <Container>
      <Icon/>
    </Container>
  )
}

const Container = styled.button`
 width: 4rem;
 height: 4rem;
 font-size: 2rem;
 display: flex;
 border: none;
 color: currentColor;
 justify-content: center;
 align-items: center;
 background-color: white;
 border-radius: 50%;
 box-shadow: 0px 2px 5px 0px rgba(38, 51, 77, 0.03);
 cursor: pointer;

`;