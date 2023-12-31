import React from "react";
import styled from "styled-components";

type gridT = {
  children: React.ReactNode;
  gridTemplateColumns?:string
};

export default function Grid({ children }: gridT) {
  return <Container>{children}</Container>;
}

const Container = styled.div<Omit<gridT, "children">>`
  width: 100%;
  display: grid;
  grid-template-columns:${({gridTemplateColumns})=> gridTemplateColumns || 'repeat(auto-fit, minmax(100px, 1fr))'};
  gap: 2.4rem;
`;
