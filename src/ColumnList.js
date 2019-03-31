import React, { memo } from "react";
import Column from "./Column";

const ColumnList = memo(props => {
  const getColumnList = () => {
    const tasks = props.column.taskIds.map(taskId =>
      props.data.tasks.find(task => task.id === taskId)
    );
    return <Column column={props.column} tasks={tasks} index={props.index} />;
  };

  return getColumnList();
});

export default ColumnList;
