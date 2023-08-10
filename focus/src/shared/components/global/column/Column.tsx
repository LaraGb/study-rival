import React from 'react'
import { styled } from 'styled-components'

type ColumnT = {
  children:React.ReactNode;
  width?:string;
  maxWidth?:string;
  alignItems?:string;
  gap?:string;
}

export default function Column({children,...styleProps}:ColumnT) {
  return (
    <Container {...styleProps}>
       {children}
    </Container>
  )
}

const Container = styled.div<Omit<ColumnT,'children'>>`
 width: ${({width})=>width || '100%'};
 max-width: ${({maxWidth})=>maxWidth || 'none'};
 display: flex;
 flex-direction: column;
 align-items: ${({alignItems})=>alignItems || 'normal'};

 &>*:not(:first-child){
    margin-top:${({gap})=>gap || '10px'}
  }
`;
