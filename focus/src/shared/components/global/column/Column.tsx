import React from 'react'
import { styled } from 'styled-components'

type ColumnT = {
  children:React.ReactNode;
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

 &>*:not(:first-child){
    margin-top:${({gap})=>gap || '10px'}
  }
`;
