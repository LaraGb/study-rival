import React from 'react';
import styled from 'styled-components';

export default function Title({children}:{children:string}) {
  return (
    <Container>
      {children}
    </Container>
  )
}

const Container = styled.div`
 font-size: 4rem;
 text-align: center;
 font-weight: bold;
 color: ${({theme})=>theme.color.text.main};
`;
