import React from 'react';
import styled from 'styled-components';

type titleT = {
 children:React.ReactNode;
 textAlign?:string;
}

export default function Title({children,...styleProps}:titleT) {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.div<Omit<titleT,'children'>>`
 font-size: 4.6rem;
 text-align: ${({textAlign})=>textAlign || 'center'};
 font-weight: 500;
 color: currentColor;
`;
