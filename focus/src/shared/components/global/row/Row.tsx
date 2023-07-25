import React from 'react';
import styled from 'styled-components';

type Props = {
 children:React.ReactNode;
 justifyContent?: string;
 alignItems?:string;
 gap?:string;
 padding?:string;
}

const Row = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.div<Omit<Props,'children'>>`
  padding: ${({padding})=> padding || "0px"};
  display: flex;
  justify-content: ${({justifyContent})=>justifyContent || 'flex-start'};
  align-items:  ${({alignItems})=>alignItems || 'stretch'};
  
  &>*:not(:first-child){
    margin-left:${({gap})=>gap || '4px'}
  }
  
`;

export default Row;