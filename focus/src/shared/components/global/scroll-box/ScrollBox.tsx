import React from 'react';
import styled from 'styled-components';

export default function ScrollBox({children}:{children:React.ReactNode}) {
  return (
    <Container>
      {children}
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  max-height: 400px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

`;