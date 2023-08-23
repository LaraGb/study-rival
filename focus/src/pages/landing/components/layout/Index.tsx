import React from 'react';
import Header from './header/Header';
import Footer from 'shared/components/layout/footer/Footer';
import styled from 'styled-components';

export default function Index({children}:{children?:React.ReactNode}) {
  return (
    <Container>
      <Header/>
      <Main>
         {children}
      </Main>
      <Footer/>
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
`;