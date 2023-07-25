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
  padding: 4px 6px;
  border-radius: 4px;
  border: none;
  outline: none;
  color: ${({theme})=>theme.color.text.main || 'white'};
  font-weight: 600;
  background: transparent;
  box-shadow: ${({isActive})=>(
    isActive
    ?''
    :'-4px -4px 4px 0px rgba(58, 68, 93, 0.50), 4px 4px 4px 0px #060c1852;'
  )};
  cursor: pointer;

  &:active{
    box-shadow: inset 5px 5px 9px #282424, inset -5px -5px 9px #484545;
  }

  &>div{
    border-radius: 4px;
    padding: 8px 10px;
  }
      
`;
