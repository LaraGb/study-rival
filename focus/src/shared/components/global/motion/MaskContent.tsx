import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useInView, motion } from 'framer-motion';

export default function MaskContent({children}:{children:React.ReactNode}) {
  const maskRef = useRef(null);
  const isInView =  useInView(maskRef,{once:true,margin:'-8%'});
  const animation = {
    initial:{y:'100%'},
    open:{y:'0%', transition:{duration:0.5}}
  }

  useEffect(()=>{

  },[isInView])

  return (
    <LineMask ref={maskRef}>
       <motion.div variants={animation} initial="initial" animate={isInView?'open':''}>
         {
          children
         }
       </motion.div>
    </LineMask>
  )
}

const LineMask = styled.div`
 overflow: hidden;

`;