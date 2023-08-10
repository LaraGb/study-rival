import React from 'react';
import styled from 'styled-components';

type stylizedBttuonT = {
  children: React.ReactNode;
  isBgHighlighted? : boolean;  
  isActive?: boolean;
  onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function StylizedButton({children, isBgHighlighted, onClick}:stylizedBttuonT) {
  return (
    <>
       {
        onClick
        ?
        (<Container isBgHighlighted={isBgHighlighted} onClick={onClick}>
          <div>{children}</div>
         </Container>
        )
        :
        ( <Container isBgHighlighted={isBgHighlighted}>
          <div>  {children}</div>
         </Container>
        )
       }
    </>
  )
}

const Container = styled.button<Omit<stylizedBttuonT,'children'>>`
  background-color: transparent;
  color:white;
  font-weight: 600;
  border-radius: 20px;
  padding: 1.4rem 2.4rem;
  border: 1px solid white;
  cursor: pointer;
`;
