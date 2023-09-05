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
   justify-content: space-between;
   align-items: center;
   gap: 6rem;

`;
