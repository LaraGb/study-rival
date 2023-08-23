import React from "react";
import Column from "shared/components/global/column/Column";
import TaskItem from "./TaskItem";
import ScrollBox from "shared/components/global/scroll-box/ScrollBox";

export default function Index() {
  return (
    <ScrollBox>
      <Column gap="12px">
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
        <TaskItem />
      </Column>
    </ScrollBox>
  );
}

