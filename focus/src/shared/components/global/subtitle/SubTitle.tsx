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
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  color: ${({theme})=>theme.color.text.main?theme.color.text.main:"#A1A1AA"};
`;
