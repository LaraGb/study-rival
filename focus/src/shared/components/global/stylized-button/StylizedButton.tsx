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
  padding: 1.6rem 6rem;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  text-align:center;
  border: none;
  background-size: 300% 100%;
  border-radius: 8px;
  background-image: linear-gradient(to right, #6253e1, #852D91, #A3A1FF, #F24645);
    box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
  -o-transition: all .4s ease-in-out;
  -webkit-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
 
  &:hover {
    background-position: 100% 0;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
    transform: scale(1.12);
  }

`;
