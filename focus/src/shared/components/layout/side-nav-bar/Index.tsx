import React from 'react';
import Border from 'shared/components/global/border/Border';
import CircularIconBtn from 'shared/components/global/circular-icon-btn/CircularIconBtn';
import Column from 'shared/components/global/column/Column';
import pageIcons from 'shared/utils/pageIcons';
import styled from 'styled-components';
import breakPoints from 'styles/breakPoints';

export default function Index() {
  return (
    <Container>
      <Border borderWidth='0px 3px 0px 0px' padding='1rem 3.4rem'>   
          <Column gap='3rem'>
            <CircularIconBtn Icon={pageIcons.Compass}/>
            <CircularIconBtn Icon={pageIcons.Star}/>
            <CircularIconBtn Icon={pageIcons.Message}/>
            <CircularIconBtn Icon={pageIcons.Analytics}/>
            <CircularIconBtn Icon={pageIcons.Settings}/>
          </Column>    
     </Border>  
    </Container>

  )
}

const Container = styled.div`

 &>div{
  height: 100%;
 }
 @media (max-width:${breakPoints.show_mobile_bar}) {
  display:none;
 }
`;