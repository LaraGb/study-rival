import React from 'react';
import styled from 'styled-components';

export default function CircularImage() {
  return (
    <Container src='https://thumbs.dreamstime.com/b/christmas-gradient-cartoon-kawaii-alien-creative-illustrated-149223256.jpg'/>
  )
}


const Container = styled.img`
  max-width: 50px;
  max-height: 50px;
  border-radius: 50%;
`;