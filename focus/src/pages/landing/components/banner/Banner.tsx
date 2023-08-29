import React, { useRef } from 'react';
import Column from 'shared/components/global/column/Column';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import Row from 'shared/components/global/row/Row';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton';
import PolaroidCard from 'shared/components/global/polaroid-card/PolaroidCard';
import {motion, useScroll, useTransform } from 'framer-motion';
import RowToColumn from 'shared/components/global/row-to-column/RowToColumn';

export default function Banner() {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target:ref
  })

  const y = useTransform(scrollYProgress,[0,1],[200,-800]);
  const y2 = useTransform(scrollYProgress,[0,1],[200,-2000]);
  const y3 = useTransform(scrollYProgress,[0,1],[100,-400]);


  return (
      <Container ref={ref}>
      <TextField>
         <Column maxWidth='1000px' alignItems='center' gap='2rem'>
           <h1>Lorem ipsum dolor sit amet consectetur </h1>
           <Paragraph  textAlign='center' fontSize='1.6rem'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis aliquid, ipsum dolorem odit odio commodi maiores vero quos dolorum deserunt repudiandae rem saepe maxime, aperiam quam beatae atque, facere voluptatum.
           </Paragraph>
         </Column>
      </TextField>
      <WideWrapping>
        <CardsField>
          <motion.div style={{y:y}}>
            <PolaroidCard/>
          </motion.div>
          <motion.div style={{y:y2}}>
            <PolaroidCard/>
          </motion.div>
          <motion.div style={{y:y3}}>
            <PolaroidCard/>
          </motion.div>
   
        </CardsField>
      </WideWrapping>
     </Container>
  )
}

const Container = styled.div`
 position: relative;
 width: 100%;
 height: 170vh;
 background-color: #f05125;

`;


const TextField = styled.div`
 position: sticky;
 top: 0;
 width: 100%;
 height: 100vh;
 z-index: 100;
 display: flex;
 justify-content: center;
 align-items: center;

 h1{
  font-size: 8rem;
  font-weight: 900;
  line-height: 100px;
  text-align: center;
 }
`;

const CardsField = styled.div`
 width:100%;
 display: flex;
 justify-content: space-between;
`;

/*
 <WideWrapping>
        <CardsField>
          <motion.div style={{y:10}}>
            <PolaroidCard/>
          </motion.div>
          <motion.div style={{y:100}}>
            <PolaroidCard/>
          </motion.div>
          <motion.div style={{y:200}}>
            <PolaroidCard/>
          </motion.div>
   
        </CardsField>
      </WideWrapping>

*/


