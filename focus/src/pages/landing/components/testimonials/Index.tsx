import React from 'react';
import Column from 'shared/components/global/column/Column';
import Container from 'shared/components/global/container/Container';
import Grid from 'shared/components/global/grid/Grid';
import TestimonialCard from 'shared/components/global/testimonial-card/TestimonialCard';
import Title from 'shared/components/global/title/Title';

export default function Index() {
  return (
    <Container>
      <Column gap='14rem'>
        <Title>Lorem ipsum dolor sit, amet consectetur.</Title>
        <Grid gridTemplateColumns='repeat(2)'>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
        
        </Grid>
      </Column>
    </Container>
  )
}
