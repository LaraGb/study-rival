import React from 'react';
import styled from 'styled-components';
import pageIcons from 'shared/utils/pageIcons';

export default function Index({checked}:({checked?:boolean})) {
  return (
    <Container>
      <td>
        <CheckBtn 
          isChecked={checked}
        >
          <pageIcons.Check/>
        </CheckBtn>
      </td>
      <td>Clear The House</td>
      <td>2h20min (25%)</td>
      <td>4h15min</td>
  </Container>
  )
}

const Container = styled.tr`
 font-size: 1.3rem;
 font-weight: 600;
`;

const CheckBtn = styled.button<{isChecked?:boolean}>`
  width: 3rem;
  height: 3rem;
  text-align: center;
  color: white;
  border: none;
  border-radius: 50%;
  background-color:${({isChecked, theme})=>(
    isChecked?theme.color.details.primary.dark:''
  )};
  cursor: pointer;

  `