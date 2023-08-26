import React from 'react'
import Container from 'shared/components/global/container/Container'
import FeatureCard from 'shared/components/global/feature-card/FeatureCard'
import Column from 'shared/components/global/column/Column'
import Grid from 'shared/components/global/grid/Grid'
import RowToColumn from 'shared/components/global/row-to-column/RowToColumn'
import Paragraph from 'shared/components/global/paragraph/Paragraph'
import Title from 'shared/components/global/title/Title'

export default function Index() {
  return (
    <>
      <Container>
        <Column alignItems='center' gap='6rem'>
          <Column maxWidth='550px'>
            <Title>
               Nossos Recursos
            </Title>
            <Paragraph textAlign='center'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem pariatur doloremque eligendi modi sequi, id recusandae culpa animi sit vitae.
            </Paragraph>
          </Column>
          <Grid>
            <FeatureCard/>
            <FeatureCard/>
            <FeatureCard/>
          </Grid>
        </Column>
      </Container>
      <Container>
        <Column gap='16rem'>
         <RowToColumn>
          <div style={{width:'600px', height:'600px', backgroundColor:'black'}}></div>
          <Column alignItems='center' maxWidth='560px' gap='3rem'>
            <Title>Habits to Do in a Daily</Title>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sequi officia molestiae quas ducimus laudantium, accusamus reiciendis modi facere, quidem quasi temporibus debitis neque possimus vitae distinctio accusantium, unde totam.
            </Paragraph>
          </Column> 
        </RowToColumn>
        <RowToColumn>
          <Column alignItems='center' maxWidth='560px' gap='3rem'>
            <Title>Habits to Do in a Daily</Title>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sequi officia molestiae quas ducimus laudantium, accusamus reiciendis modi facere, quidem quasi temporibus debitis neque possimus vitae distinctio accusantium, unde totam.
            </Paragraph>
          </Column> 
          <div style={{width:'600px', height:'600px', backgroundColor:'black'}}></div>
        </RowToColumn>
        <RowToColumn>
          <div style={{width:'600px', height:'600px', backgroundColor:'black'}}></div>
          <Column alignItems='center' maxWidth='560px' gap='3rem'>
            <Title>Habits to Do in a Daily</Title>
            <Paragraph>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed sequi officia molestiae quas ducimus laudantium, accusamus reiciendis modi facere, quidem quasi temporibus debitis neque possimus vitae distinctio accusantium, unde totam.
            </Paragraph>
          </Column> 
        </RowToColumn>
        </Column>
      </Container>
    </>
  )
}
