import React from 'react';
import Column from 'shared/components/global/column/Column';
import Container from 'shared/components/global/container/Container';
import Grid from 'shared/components/global/grid/Grid';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import PolaroidCard from 'shared/components/global/polaroid-card/PolaroidCard';
import RowToColumn from 'shared/components/global/row-to-column/RowToColumn';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton';
import SubTitle from 'shared/components/global/subtitle/SubTitle';
import Title from 'shared/components/global/title/Title';


export default function Index() {
  return (
    <Container>
      <RowToColumn>
        <Column maxWidth='580px' alignItems='start' gap='2.4rem'>
          <SubTitle>Lorem ipsum dolor sit amet consectetur.</SubTitle>
          <Paragraph>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse porro nihil cumque ipsa, unde nesciunt, quo odio rem labore facere nulla? Explicabo, sint vitae quidem nisi exercitationem praesentium expedita reiciendis.
          </Paragraph>
          <StylizedButton>Junte-se a nós</StylizedButton>
        </Column>
        <Grid>
           <PolaroidCard/>
           <PolaroidCard/>
           <PolaroidCard/>
        </Grid>
      </RowToColumn>
    </Container>
  )
}
