import React, { useRef } from 'react'
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import Card from './Card';
import {motion, useScroll, useTransform} from 'framer-motion';
import Column from 'shared/components/global/column/Column';
import Span from 'shared/components/global/span/Span';

export default function Index() {
  const ref = useRef(null);
 
    const {scrollYProgress} = useScroll({
      target:ref
    });

  const y = useTransform(scrollYProgress,[0,0.2],[1000,0]);
  const y2 = useTransform(scrollYProgress,[0,0.8],[5000,0]);
  const y3 = useTransform(scrollYProgress,[0,0.9],[5000,0]);
  const y4 = useTransform(scrollYProgress,[0,0.96],[5000,0]);

  return (
    <Container ref={ref}>
      <Sticky>
        <WideWrapping>
          <Column gap='8rem'>
            <Column gap={'0rem'} alignItems='start'>
              <Span fontSize='9rem' fontWeight='bold'>The Five Trends.</Span>
              <Span fontSize='1.7rem'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </Span>
            </Column> 
            <CardsList>
            <motion.div style={{y}}> 
              <Card/>
            </motion.div>
            <motion.div style={{y:y2}}>
              <Card/>
            </motion.div>
            <motion.div style={{y:y3}}>
              <Card/>
            </motion.div>
            <motion.div style={{y:y4}}>
              <Card/>
            </motion.div>
           </CardsList>
          </Column>
        </WideWrapping>
      </Sticky>
    </Container>
  )
}

const Container = styled.div`
 height: 130vh;

 color: black;
 background-color: white;
`;


const Sticky = styled.div`
  position: sticky;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const CardsList = styled.div`
 display: flex;
 gap: 40px;

`;