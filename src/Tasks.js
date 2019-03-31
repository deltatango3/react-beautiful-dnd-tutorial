import React, { memo } from "react";
import Task from "./Task";

const Tasks = memo(props => {
  const getTaskList = () => {
    return props.tasks.map((task, index) => {
      return <Task key={task.id} task={task} index={index} />;
    });
  };

  return getTaskList();
});

export default Tasks;
