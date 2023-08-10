import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import styled from 'styled-components';

export default function MaskY({children}:{children:React.ReactNode}) {
    const maskRef = useRef(null);
    const isInView = useInView(maskRef,{once:true})
    const animation = {
        initial:{
            y:'100%'
        },
        open:{
            y:'0%',
            transition:{duration:1}
        }
    }
    
    return(
        <Container ref={maskRef}>
           <motion.div variants={animation} initial="initial" animate={isInView?'open':''}>
            {children}
           </motion.div>
        </Container>
    )

  
}

const Container = styled.div`
 overflow: hidden;
`;


