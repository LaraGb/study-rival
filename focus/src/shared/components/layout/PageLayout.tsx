import React from 'react';
import styled from 'styled-components';
import TopBar from './top-bar/TopBar';

export default function PageLayout({children}:{children:React.ReactNode}) {
  return (
    <Container>
      <TopBar/>
      <Main>
         {children}
      </Main>
    </Container>
  )
}

const Container = styled.div`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
`;

const Main = styled.div`
 flex: 1;
 padding:2.6rem 0px;
`;