import React, { useRef } from 'react';
import Column from 'shared/components/global/column/Column';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import Title from 'shared/components/global/title/Title';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import {motion, useScroll, useTransform} from 'framer-motion';
import img from 'assets/background/image 115.png';

export default function Index() {
   const refScroll = useRef(null);
   const {scrollYProgress} = useScroll({target:refScroll});


  const y = useTransform(scrollYProgress,[0,1],[2000,-200]);


  return (
    <Container ref={refScroll}>
       <Sticky>
        <WideWrapping>
           <Column alignItems='center'>
               <Column maxWidth='760px' alignItems='center'>
                   <Title>We are always looking for new adventures</Title>
                   <Paragraph textAlign='center'>
                     Bem-vindo ao [Nome do Seu Site], o seu destino para uma produtividade aprimorada. Nossa equipe é apaixonada por ajudar você a tirar o máximo proveito do seu tempo e alcançar seus objetivos de maneira eficaz.
                   </Paragraph>
                   <Paragraph textAlign='center'>
                     Combinamos a técnica Pomodoro com recursos inovadores para oferecer uma abordagem completa para a produtividade. Nossa missão é simplificar a gestão do tempo, ajudando-o a manter o foco, cumprir tarefas e superar desafios.
                   </Paragraph>
               </Column>
               <AnimationField style={{y}}>
                   <img src={img} alt="" />
               </AnimationField>
          </Column>
        </WideWrapping>
       </Sticky>
    </Container>
  )
}

const Container = styled.div`
  height: 130vh;
  position: relative;
  background:radial-gradient(#7605deb5, black 66%);
`;

const Sticky = styled.div`
 position: sticky;
 top: 0;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow: hidden;
 
`;

const AnimationField = styled(motion.div)`
 position: absolute;
 z-index: -1;


 &>img{
  max-width: 60rem;
 }
`;