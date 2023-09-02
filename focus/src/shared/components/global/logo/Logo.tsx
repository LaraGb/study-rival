import React from 'react';
import styled from 'styled-components';


export default function Logo() {
  return (
    <Container>
      Focus 
      <Medium>
        Together
      </Medium>
    </Container>
  )
}


const Container = styled.h1`
  font-weight:600;
  font-size: 2.5rem;
  color: ${({theme})=> theme.color.text.main};
`;

const Medium = styled.span`
  font-weight: 600;
`;
