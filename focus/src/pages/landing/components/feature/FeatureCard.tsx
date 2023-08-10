import React from 'react';
import styled from 'styled-components';
import Column from '../../../../shared/components/global/column/Column';
import SubTitle from '../../../../shared/components/global/subtitle/SubTitle';
import Paragraph from '../../../../shared/components/global/paragraph/Paragraph';


type featureCardType = {
  isRight?:boolean;
}

export default function FeatureCard({isRight}:featureCardType) {
  return (
    <Container isRight={isRight}>
       <Column maxWidth='500px' gap='4rem'>
         <SubTitle>Colaborative Notes</SubTitle>
         <Paragraph>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque aut maiores sit delectus temporibus, asperiores sed vitae repudiandae eum non distinctio consectetur autem placeat, quo sapiente veritatis iusto exercitationem, ut dolorum facere. At explicabo harum cum quia amet vel tenetur.
         </Paragraph>
       </Column>
       <div>
        imagem here
       </div>
    </Container>
  )
}

const Container = styled.div<featureCardType>`
 display: flex;
 justify-content: space-around;
 align-items: center;
 flex-direction: ${({isRight})=> isRight?'row-reverse':'row'};
 padding: 6rem 0rem;
 gap: 4rem;

`;
