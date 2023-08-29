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
  background-color: white;
  padding: 1.2rem 2rem;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  border-radius: 50px;
  color:black;
  border: none;
  cursor: pointer;
`;
