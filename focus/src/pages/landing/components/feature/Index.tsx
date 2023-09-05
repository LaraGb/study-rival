import React,{useRef, useState, useEffect} from 'react';
import Column from 'shared/components/global/column/Column';
import RowToColumn from 'shared/components/global/row-to-column/RowToColumn';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import {motion, useScroll,useTransform} from 'framer-motion';
import Title from 'shared/components/global/title/Title';
import Paragraph from 'shared/components/global/paragraph/Paragraph';

export default function Index() {
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const refContainer = useRef(null);
  const {scrollYProgress} = useScroll({target:refContainer});
  

  const y = useTransform(scrollYProgress,[0,1],[viewportHeight,-(viewportHeight)]);
  

  useEffect(() => {
    function handleResize() {
      setViewportHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container ref={refContainer}>
      <Sticky>
        <WideWrapping>
          <RowToColumn>
            <motion.div style={{y}}>
             <Column>
               <TextField>
                 <Column alignItems='center' maxWidth='500px'>
                   <Title>Lorem ipsum dolor sit</Title>
                   <Paragraph textAlign='center'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est perferendis omnis similique assumenda, quod quam, voluptate ab illo quis animi ex odit voluptatem eveniet ea totam dolorem natus, quia sunt!
                   </Paragraph>
                 </Column>
               </TextField>
               <TextField>
                 <Column alignItems='center' maxWidth='500px'>
                    <Title>Lorem ipsum dolor sit</Title>
                   <Paragraph textAlign='center'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est perferendis omnis similique assumenda, quod quam, voluptate ab illo quis animi ex odit voluptatem eveniet ea totam dolorem natus, quia sunt!
                   </Paragraph>
                 </Column>
               </TextField>
               <TextField>
               <Column alignItems='center' maxWidth='500px'>
                   <Title>Lorem ipsum dolor sit</Title>
                   <Paragraph textAlign='center'>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est perferendis omnis similique assumenda, quod quam, voluptate ab illo quis animi ex odit voluptatem eveniet ea totam dolorem natus, quia sunt!
                   </Paragraph>
                 </Column>          
               </TextField>
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
 top: 0;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow: hidden;
`;

const View = styled.div`
 height: 400px;
 background-color: white;
`;

const TextField = styled.div`
 height: 90vh;
 display: flex;
 align-items: center;
 justify-content: center;
 
`;