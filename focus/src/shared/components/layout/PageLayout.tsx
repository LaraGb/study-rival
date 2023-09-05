import React from 'react';
import styled from 'styled-components';
import TopBar from './top-bar/TopBar';
import SideBar from './side-nav-bar/Index';
import RowToColumn from '../global/row-to-column/RowToColumn';
import TimerBar from './timer-bar/Index';
import Container from '../global/container/Container';

export default function PageLayout({children}:{children:React.ReactNode}) {
  return (
    <Layout>
      <TopBar/>
      <Main>
        <SideBar/>
          <div style={{flex:1}}>
           <Container>
            <RowToColumn>
              <TimerBar/>
              <div>
                {children}
              </div>
            </RowToColumn>
           </Container>
         </div>
      </Main>
    </Layout>
  )
}

const Layout = styled.div`
 min-height: 100vh;
 display: flex;
 flex-direction: column;
 background: #F7F8FA;
`;

const Main = styled.div`
 flex: 1;
 display: flex;
 padding:2.6rem 0px;
`;