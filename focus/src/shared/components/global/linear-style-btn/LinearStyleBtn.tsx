import React from 'react';
import styled from 'styled-components';

type linearStyleBtnT = {
  children:string;
  width?:string;
}

export default function LinearStyleBtn({children,...propsStyle}:linearStyleBtnT) {
  return (
    <Container {...propsStyle}>{children}</Container>
  )
}




const Container = styled.button<Omit<linearStyleBtnT,'children'>>`
  width: ${({width})=>width || 'auto'};
  font-family: 'Minecraftia';
  color: #0f0;
  background: transparent;
  padding: 10px 6px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 1.2rem;
  display: block;
  outline:none;
  border: 1px solid #0f0;
  box-shadow: 0 0 10px rgba(0,255,0,0.5), rgba(0,255,0,0.5);
  cursor: pointer;

  &:hover{
    color: #000;
    border: 1px solid transparent;
    box-shadow: 0 0 40px #0A0, inset 0 0 40px #0A0;
    background: repeating-linear-gradient(0deg, #0c0, #0c0 1px, #050 1px, #050 2px);
    font-weight:bold;
  }
`;