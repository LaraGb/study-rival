import React from 'react';
import styled from 'styled-components';
import WideWrapping from '../wide-wrapping/WideWrapping';

export default function Container({children}:{children:React.ReactNode}) {
  return (
    <ContainerField>
      <WideWrapping>
         {children}
      </WideWrapping>
    </ContainerField>
  )
}


const ContainerField = styled.div`
  padding: 10rem 0rem;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;