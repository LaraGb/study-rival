import React from 'react';
import Header from './header/Index';
import styled from 'styled-components';
import Footer from 'shared/components/global/footer/Footer';

export default function Index({children}:{children:React.ReactNode}) {
  return (
    <Container>
      <Header/>
      <div className='main'>
        {children}
      </div>
      <Footer/>
    </Container>
  )
}

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fff;

  &>.main{
    flex: 1;
  }
`;