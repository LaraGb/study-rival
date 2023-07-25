import React from 'react';
import styled from 'styled-components';

type neonBtnT = {
  children: React.ReactNode;
  isPrimaryColor?:boolean;
}

export default function NeonBtn({children,isPrimaryColor}:neonBtnT) 
  {
  return (
    <Container isPrimaryColor={isPrimaryColor}>
      {children}
    </Container>
  )
}

const Container = styled.button<Omit<neonBtnT,'children'>>`
  padding: 4px 8px;
  font-size: 14px;
  background-color: transparent;
  color: ${({isPrimaryColor,theme})=>{
    return (isPrimaryColor ? theme.color.details.primary.neon 
      || '#84CC16'
      : theme.color.details.secondary.neon || '#06B6D4')
  }};
  border: ${({isPrimaryColor,theme})=>{
    const color = isPrimaryColor ? theme.color.details.primary.neon 
      || '#84CC16'
      : theme.color.details.secondary.neon || '#06B6D4';
    
    return `1px solid ${color}`;
  }};
  border-radius: 4px;
`;
