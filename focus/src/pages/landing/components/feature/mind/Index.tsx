import React, { useRef } from 'react'
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import Card from './Card';
import {motion, useScroll, useTransform} from 'framer-motion';

export default function Index() {
  const ref = useRef(null);
 
    const {scrollYProgress} = useScroll({
      target:ref
    });

  const y = useTransform(scrollYProgress,[0,0.6],[5000,0]);
  const y2 = useTransform(scrollYProgress,[0,0.8],[5000,0]);
  const y3 = useTransform(scrollYProgress,[0,0.9],[5000,0]);
  const y4 = useTransform(scrollYProgress,[0,0.96],[5000,0]);

  return (
    <Container ref={ref}>
      <Sticky>
        <WideWrapping>
         <div style={{width:'100%', height:'400px', backgroundColor:'red'}}>

         </div>
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
        </WideWrapping>
      </Sticky>
    </Container>
  )
}

const Container = styled.div`
 height: 170vh;
 padding-bottom: 10rem;
`;

const Sticky = styled.div`
  position: sticky;
  top: 16rem;
  
  
`;

const CardsList = styled.div`
 background-color: #915656;
 display: flex;
 gap: 40px;

`;