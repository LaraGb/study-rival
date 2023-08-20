import React from 'react';
import styled from 'styled-components';

function InputStylized() {
  return (
    <Container>
      
    </Container>
  )
}

const Container = styled.input.attrs({type:'text'})`
  outline: none;
  border: none;
  border-radius: 6px;
  height: 32px;
  color: ${({theme})=>theme.color.text.main || 'white'};
  background:transparent;
  box-shadow: -5px -5px 10px 0px #312f2f inset, 5px 5px 10px 0px rgba(3, 3, 3, 0.5) inset, 2px 2px 4px 0px rgba(170, 170, 204, 0.25) inset, -2px -2px 4px 0px rgba(255, 255, 255, 0.274) inset;
  cursor: pointer;
`;

export default InputStylized
