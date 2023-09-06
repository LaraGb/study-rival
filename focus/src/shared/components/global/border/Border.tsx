import React from 'react';
import styled, { css } from 'styled-components';

type borderT = {
   padding?:string,
   borderWidth:string,
   children:React.ReactNode 
}

export default function Border({children,...propsStyle}:borderT) {
  return (
    <Container {...propsStyle}>
       {children}
    </Container>
  )
}

const Container = styled.div<Omit<borderT,'children'>>`
  padding: ${({padding})=> padding || '1rem'};
  border-width: ${({borderWidth})=> borderWidth || 0};
  border-style: solid;
  border-color: #EDEFF2;
`;