import React from 'react';
import CircularIconBtn from 'shared/components/global/circular-icon-btn/CircularIconBtn';
import Column from 'shared/components/global/column/Column';
import pageIcons from 'shared/utils/pageIcons';
import styled from 'styled-components';

export default function Index() {
  return (
    <>
      <Container>
        <>
          <Column gap='3rem'>
            <CircularIconBtn Icon={pageIcons.Compass}/>
            <CircularIconBtn Icon={pageIcons.Star}/>
            <CircularIconBtn Icon={pageIcons.Message}/>
            <CircularIconBtn Icon={pageIcons.Analytics}/>
            <CircularIconBtn Icon={pageIcons.Settings}/>
          </Column>
        </>
      </Container>
    </>
  )
}

const Container = styled.div`
 padding: 0rem 3.8rem;
 border-right:${({theme})=>`3px solid ${theme.color.details.gray.light}`};
`;