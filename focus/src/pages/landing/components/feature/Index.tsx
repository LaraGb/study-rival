import React from 'react';
import Container from '../../../../shared/components/global/container/Container';
import Column from '../../../../shared/components/global/column/Column';
import Row from '../../../../shared/components/global/row/Row';
import FeatureCard from './FeatureCard';
import Paragraph from '../../../../shared/components/global/paragraph/Paragraph';


export default function Index() {
  return (
    <Container>
      <Column gap='6rem'>
        <FeatureCard/>
        <FeatureCard isRight={true}/>
        <FeatureCard/>
      </Column>
    </Container>
  )
}
