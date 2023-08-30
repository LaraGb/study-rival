import React from 'react';
import Column from 'shared/components/global/column/Column';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import Span from 'shared/components/global/span/Span';
import styled from 'styled-components';


export default function Card() {
  return (
    <Container>
      <Column>
        <Image src='https://ouch-cdn2.icons8.com/48basTM0-JgqIrx8kbaeHEQPVuj8q0Xnjq8KYNOs01M/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTI5/L2IyODI1ZjM0LWE1/YTYtNDliYy1hMzNl/LWM2YjM4ZTdiY2Nm/ZS5wbmc.png'/>
        <Column alignItems='center'>
          <Span
           fontWeight='bold'
           fontSize='1.8rem'
           >Play With Friends</Span>
          <Paragraph
           textAlign='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quis laborum quod provident unde
          </Paragraph>
        </Column>
      </Column>
    </Container>
  )
}

const Container = styled.div`
 width: 380px;
 border: 6px solid black;
 padding-bottom: 2.4rem;
 border-radius: 25px;
 color: black;
`;

const Image = styled.img`
  max-width: 100%;
  height: 30rem;
  object-fit: contain;
`;