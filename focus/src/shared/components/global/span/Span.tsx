import React from 'react';
import { styled } from 'styled-components';

type spanT = {
   children: React.ReactNode;
   borderColor?:string;
   padding?:string;
}

export default function Span({children,...stylePros}:spanT) {
  return (
    <Container {...stylePros}>
       {children}
    </Container>
  )
}

const Container = styled.div<Omit<spanT,'children'>>`
  border: ${({borderColor})=>`1px solid ${borderColor}` || 'none'};
  padding:${({padding})=>padding };
`;