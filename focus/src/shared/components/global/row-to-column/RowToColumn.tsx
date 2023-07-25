import React from 'react'
import { styled } from 'styled-components'

export default function RowToColumn({children}:{children:React.ReactNode}) {
  return (
    <Container>
       {children}
    </Container>
  )
}

const Container = styled.div`
   display: flex;
   gap: 6rem;

   &>*{
    width: 50%;
  }
`;
