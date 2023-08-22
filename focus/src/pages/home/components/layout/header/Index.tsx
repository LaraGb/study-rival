import React from 'react';
import styled from 'styled-components';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';

export default function Index() {
  return (
    <Container>
      <WideWrapping>
    
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
 height: 80px;
 background-color: ${({theme})=> theme.color.details.primary.base};
`;