import React from 'react';
import styled from 'styled-components';
import WideWrapping from '../wide-wrapping/WideWrapping';


type containerT = {
  children:React.ReactNode;
  background?:string
}

export default function Container({children,...styleProps}:containerT) {
  return (
    <ContainerField {...styleProps}>
      <WideWrapping>
         {children}
      </WideWrapping>
    </ContainerField>
  )
}


const ContainerField = styled.div<Omit<containerT,'children'>>`
  padding: 4rem 0rem;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({background})=>background || 'transparent'};

`;