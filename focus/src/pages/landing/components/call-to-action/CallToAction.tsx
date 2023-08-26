import React from 'react';
import Column from 'shared/components/global/column/Column';
import Container from 'shared/components/global/container/Container';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import Title from 'shared/components/global/title/Title';

export default function CallToAction() {
  return (
    <Container> 
      <Column alignItems='center' gap='6rem'>
        <Column alignItems='center' maxWidth='500px' gap='2.2rem'>
           <Title>Gamify Your Life With Rabitica</Title>
           <Paragraph textAlign='center'>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque rem est dicta vero sapiente, vel tenetur officiis aut placeat! Ex.
           </Paragraph>
        </Column>
        <div style={{width:'900px', height:'600px', backgroundColor:'black'}}></div>
      </Column>
    </Container>
  )
}
