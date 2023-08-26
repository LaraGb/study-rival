import React from 'react';
import Container from 'shared/components/global/container/Container';
import Row from 'shared/components/global/row/Row';
import TestimonialCard from 'shared/components/global/testimonial-card/TestimonialCard';

export default function Index() {
  return (
    <Container>
      <Row justifyContent='space-between'>
        <TestimonialCard/>
        <TestimonialCard/>
        <TestimonialCard/>
      </Row>
    </Container>
  )
}
