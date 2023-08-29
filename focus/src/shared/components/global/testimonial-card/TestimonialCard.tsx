import React from 'react';
import styled from 'styled-components';
import Row from '../row/Row';
import Span from '../span/Span';
import pageIcons from 'shared/utils/pageIcons';
import Column from '../column/Column';
import Paragraph from '../paragraph/Paragraph';


export default function TestimonialCard() {
  return (
    <Container>
      <Column>
        <Row justifyContent='space-between'>
         <Span fontSize='1.8rem'>Mister Cat</Span>
         <Row>
           <pageIcons.Star/>
           <pageIcons.Star/>
           <pageIcons.Star/>
           <pageIcons.Star/>
           <pageIcons.Star/>
           <pageIcons.Star/>
          </Row>
        </Row>
        <Row>
          <Paragraph fontSize='1.2rem'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, tempora! Iusto vitae tempora sint nam aliquam, explicabo repellat, facilis alias neque culpa error praesentium laboriosam expedita dolore quidem accusantium. Et?
          </Paragraph>
          <Image src='https://i.pinimg.com/1200x/6e/97/f1/6e97f17fed61b47e8f07b76f17b06299.jpg'/>
        </Row>
      </Column>
    </Container>
  )
}


const Container = styled.div`
 padding: 30px;
 border-radius: 20px;
 border: 4px solid white;
 font-size: 1.6rem;
`;

const Image = styled.img`
 width: 14rem;
 object-fit: cover;
`; 