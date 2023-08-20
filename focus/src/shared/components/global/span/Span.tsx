import React from 'react';
import { styled } from 'styled-components';

type spanT = {
   children: React.ReactNode;
   backgroundColor?:string;
   padding?:string;
   fontSize?:string;
   fontWeight?:string;
   margin?:string;
}

export default function Span({children,...stylePros}:spanT) {
  return (
    <Container {...stylePros}>
       {children}
    </Container>
  )
}

const Container = styled.span<Omit<spanT,'children'>>`
  margin: ${({margin})=>margin || '0'};
  padding:${({padding})=>padding };
  font-size: ${({fontSize})=>fontSize || '1.4rem'};
  word-break:break-all;
  font-weight:${({fontWeight}) => fontWeight || 'normal'};
  background-color:${({backgroundColor})=>backgroundColor || 'transparent'};
`;