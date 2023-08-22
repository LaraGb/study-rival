import React from "react";
import styled from "styled-components";
import TaskItem from "./TaskItem";
import Row from "shared/components/global/row/Row";
import StylizedButton from "shared/components/global/stylized-button/StylizedButton";
import Column from "shared/components/global/column/Column";

export default function Index() {
  return (
    <Column gap="16px">
      <Row>
        <StylizedButton>Tarefas</StylizedButton>
        <StylizedButton>Check List</StylizedButton>
      </Row>
      <TaskList>
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </TaskList>
    </Column>
  );
}


const TaskList = styled.div`
  min-height: 400px;
  max-height: 400px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  & > *:not(:first-child) {
    margin-top: 10px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;
