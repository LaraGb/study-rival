import React from "react";
import styled from "styled-components";

export default function WideWrapping({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
  padding: 0rem 2rem;
`;
