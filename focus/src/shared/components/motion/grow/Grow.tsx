import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';

type ParallaxT = {
    children:React.ReactNode
}

export default function Grow({children}:ParallaxT) {
  const ref = useRef(null);
   const isInView =  useInView(ref);

   const variantes = {
    initial:{
      opacity:0.4,
      scale:0.6
    },
    inView:{
      opacity:1,
      scale:1,
      transition:{duration:1}
    }
   }


  return (
    <motion.div
      variants={variantes}
      animate={isInView?'inView':'initial'}
      ref={ref}
    >
       {children}
    </motion.div>
  )
}
