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
  padding: 4rem 0rem;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

`;