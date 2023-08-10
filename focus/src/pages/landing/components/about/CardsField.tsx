import React from "react";
import styled from "styled-components";
import Card from "./Card";
import aboutIconsConfig from "../../../../config/about/aboutIcons";
import { motion } from "framer-motion";

export default function CardsField() {
  return (
    <Container>
      {
        aboutIconsConfig.map((data,index) => 
         (
          <Translate 
            
          >
           <Card {...data}/>
          </Translate>)
        )
      }
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;

`;

const Translate = styled(motion.div)`
  transform: translate(-4px,-50px) rotate(45deg);
`;

