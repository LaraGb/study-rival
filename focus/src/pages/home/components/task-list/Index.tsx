import React from "react";
import TasksField from "./tasks-field/Index";
import TabField from "shared/components/global/tab-field/TabField";

const tabs = [
  {
    id: 0,
    label: "Suas Tarefas",
    Component: <TasksField />,
  },
];

export default function Index() {
  return (
    <>
      <TabField tabs={tabs} />
    </>
  );
}
