import React from 'react';
import styled from 'styled-components';

type Props = {
 width?:string;
 height?:string;
 children:React.ReactNode;
 justifyContent?: string;
 alignItems?:string;
 gap?:string;
 padding?:string;
 backgroundColor?:string;
}

const Row = ({children,...styleProps}:Props) => {
  return (
    <Container {...styleProps}>
      {children}
    </Container>
  )
}

const Container = styled.div<Omit<Props,'children'>>`
  width: ${({width})=> width || 'auto'};
  height: ${({height})=> height || 'auto'};
  padding: ${({padding})=> padding || "0px"};
  display: flex;
  justify-content: ${({justifyContent})=>justifyContent || 'flex-start'};
  align-items:  ${({alignItems})=>alignItems || 'stretch'};
  background-color: ${({backgroundColor})=> backgroundColor || 'transparent'};

  &>*:not(:first-child){
    margin-left:${({gap})=>gap || '4px'}
  }
  
`;

export default Row;