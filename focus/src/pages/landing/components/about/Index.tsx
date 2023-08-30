import React,{useRef} from 'react';
import Column from 'shared/components/global/column/Column';
import Paragraph from 'shared/components/global/paragraph/Paragraph';
import Span from 'shared/components/global/span/Span';
import StylizedButton from 'shared/components/global/stylized-button/StylizedButton';
import WideWrapping from 'shared/components/global/wide-wrapping/WideWrapping';
import styled from 'styled-components';
import {motion, useScroll, useTransform} from 'framer-motion';

export default function Index() {
  const ref = useRef(null);

  const {scrollYProgress} = useScroll({
    target:ref
  })

  const y = useTransform(scrollYProgress,[0,0.8],[2000,0]);
  const scale = useTransform(scrollYProgress,[0,0.8],[0.5,1.8])

  return (
    <Container ref={ref}>
      <Sticky>
        <WideWrapping>
          <Column alignItems='center'>
             <Column maxWidth='1000px' alignItems='center' gap='2rem'>
               <Span fontSize='8rem' fontWeight='bold'>We are always looking for new adventures</Span>
               <Paragraph textAlign='center'>
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut sint, quidem odit quam unde ipsam ex? Soluta officia ea eum neque id ab vero maxime molestiae repellat deserunt maiores fugit, tempora error minus doloremque animi esse? Dolorum, cum?
               </Paragraph>
               <StylizedButton>Faça Parte</StylizedButton>
             </Column>      
              <Absolute>
               <motion.div style={{y, scale}}>
                <img src="https://ouch-cdn2.icons8.com/JPROZ2foiw9UtIuuoO0zXoIq_RZ5SQIbp7Tln6zYfWU/rs:fit:256:376/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvOTQx/LzBmNDk0MTVlLTA4/NzYtNDc3MC05MTUy/LTk5NmZhOTkyZWM5/NS5wbmc.png" alt="" />
               </motion.div>
              </Absolute>
          </Column>
        </WideWrapping>
      </Sticky>
    </Container>
  )
}

const Container = styled.div`
 position: relative;
 height: 120vh;
 color: black;
 background-color: white;
`;

const Sticky = styled.div`
 position: sticky;
 top: 0;
 width: 100%;
 height: 100vh;
 display: flex;
 justify-content: center;
 align-items: center;
 overflow: hidden;

`;

const Absolute = styled.div`
 position: absolute;
`;