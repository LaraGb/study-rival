import React,{useRef} from 'react';
import Column from 'shared/components/global/column/Column';
import RowToColumn from 'shared/components/global/row-to-column/RowToColumn';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import {motion, useScroll,useTransform} from 'framer-motion';

export default function Index() {
  const refContainer = useRef(null);
  const {scrollYProgress} = useScroll({target:refContainer});

  const y = useTransform(scrollYProgress,[0,1],[2000,-2000]);

  return (
    <Container>
      <Sticky>
        <WideWrapping>
          <RowToColumn>
            <motion.div style={{y}}>
             <Column>
              <TextField/>
              <TextField/>
              <TextField/>
             </Column>
            </motion.div>
            <div>
               <View/>
            </div>
          </RowToColumn>
        </WideWrapping>
      </Sticky>
    </Container>
  )
}

const Container = styled.div`
 min-height: 170vh;
`;

const Sticky = styled.div`
 position: sticky;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow: hidden;
 background-color: #f5cece;
 top: 0;
`;

const View = styled.div`
 height: 400px;
 background-color: white;
`;

const TextField = styled.div`
 height: 90vh;
 background-color: #e283d2;
`;