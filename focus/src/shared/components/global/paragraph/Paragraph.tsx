import React from 'react';
import { styled } from 'styled-components';

type paragraphT = {
  children: string;
  fontSize?: string,
  fontWeight?: string | number;
  textAlign?:string;
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
  max-width: 90%;
  letter-spacing: 2px;
  color:${({color})=> color || 'currentColor'};
  font-size: ${({fontSize})=> fontSize || '1.5rem'};
  font-weight: ${({fontWeight})=> fontWeight || 'normal'};
  text-align: ${({textAlign})=> textAlign || 'left'};
  line-height: 24px;
  font-weight: 400;
`;