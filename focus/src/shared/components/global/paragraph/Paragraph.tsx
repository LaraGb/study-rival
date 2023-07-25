import React from 'react';
import { styled } from 'styled-components';

type paragraphT = {
  children: string;
  fontSize?: string,
  fontWeight?: string | number;
  color?:string;
}

export default function Paragraph({children,...styleProps}:paragraphT) {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.p<Omit<paragraphT,'children'>>`
  font-size: ${({fontSize})=> fontSize || '1.6rem'};
  font-weight: ${({fontWeight})=> fontWeight || 'normal'};
  color:${({theme,color})=>{
     return color?color:theme.color.text.label?theme.color.text.label:'#71717A'
  }};
`;