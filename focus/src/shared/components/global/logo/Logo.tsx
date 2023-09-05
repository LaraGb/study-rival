import React from 'react';
import styled from 'styled-components';


export default function Logo() {
  return (
    <Container>
      Logo Here
    </Container>
  )
}


const Container = styled.h1`
  font-weight:600;
  font-size: 2rem;
  color: ${({theme})=> theme.color.text.main};
`;


