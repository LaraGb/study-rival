import React from 'react';
import { styled } from 'styled-components';

type paragraphT = {
  children: string;
  fontSize?: string,
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
  max-width: 92%;
  letter-spacing: 2px;
  color:${({color})=> color || 'currentColor'};
  font-size: ${({fontSize})=> fontSize || '1.4rem'};
  text-align: ${({textAlign})=> textAlign || 'left'};
  line-height: 24px;
  font-weight: 200;
`;