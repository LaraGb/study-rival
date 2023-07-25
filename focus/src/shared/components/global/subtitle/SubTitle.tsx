import React from 'react';
import styled from 'styled-components';

export default function SubTitle({children}:{children:string}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${({theme})=>theme.color.text.sub?theme.color.text.sub:"#A1A1AA"};
`;
