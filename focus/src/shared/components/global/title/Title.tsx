import React from "react";
import { styled } from "styled-components";

export default function Title({ children }: { children: React.ReactNode }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  font-size: 3.5rem;
  font-weight: 700;
  color: ${({theme})=>theme.color.text.main};
`;
