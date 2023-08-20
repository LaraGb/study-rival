import React from 'react';
import styled from 'styled-components';

export default function LoadStriped() {
  return (
    <Container>
       <div className='load'>
         <div className='visible'></div>

       </div>
       <div className='label'>
          sec
       </div>
    </Container>
  )
}

const Container = styled.div`
  width: 200px;
  height: 18px;
  display: flex;
  align-items: center;
  gap: 1.6rem;
  color:${({theme})=> theme.color.details.primary.base};

  .load{
    position: relative;
    flex: 1;
    height: 100%;

    .visible{
      width: 20%;
      height: 100%;
      background-color:${({theme})=> theme.color.details.primary.base};
    }

    &::before{
      content: "";
      position: absolute;
      width: 40%;
      height: 1px;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color:${({theme})=> theme.color.details.primary.base};
      
     }
  }

  .label{
    font-size: 1.6rem;
  }
`;