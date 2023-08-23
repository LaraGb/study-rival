import React from "react";
import styled from "styled-components";

type gridT = {
  children: React.ReactNode;
};

export default function Grid({ children }: gridT) {
  return <Container>{children}</Container>;
}

const Container = styled.div<Omit<gridT, "children">>`
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;
