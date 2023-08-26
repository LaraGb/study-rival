import React from 'react';
import Column from 'shared/components/global/column/Column';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import Row from 'shared/components/global/row/Row';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton';

export default function Banner() {
  return (
    <Container>
      <WideWrapping>
          <Column alignItems='center'>
            <Column alignItems='center' maxWidth='600px' gap='3rem'>
              <Title>Gamify Your Life With Rabitica</Title>
              <Paragraph textAlign='center'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates iste architecto totam cupiditate distinctio.
              </Paragraph>
              <Row>
                 <StylizedButton>Join FocusTogther</StylizedButton>
              </Row>
            </Column>
           </Column>
      </WideWrapping>
    </Container>
  )
}

const Container = styled.div`
 width: 100%;
 height: 75vh;
 padding-top: 80px;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const Title = styled.h1`
 font-size: 6rem;
 text-align: center;
`;
