import React from 'react';
import styled from 'styled-components';

export default function PolaroidCard() {
  return (
    <Container>
       <Image src='https://i.pinimg.com/1200x/6e/97/f1/6e97f17fed61b47e8f07b76f17b06299.jpg'/>
    </Container>
  )
}

const Container = styled.div`
 max-width: 32rem;
 height: 44rem;
 padding: 16px;
 border-radius: 50px;
 background-color: white;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50px;
  object-fit: cover;
`;
