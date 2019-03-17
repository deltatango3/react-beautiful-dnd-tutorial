import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './Column';

const App = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = result => {
    const { destination, source, draggableId } = result;

    //no destination
    if (!destination) {
      return;
    }
    //dropped in the same spot in the same column
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const column = data.columns[0];
    const newTaskIds = Array.from(column.taskIds);
    newTaskIds.splice(source.index, 1);
    newTaskIds.splice(destination.index, 0, draggableId);
    const newColumn = {
      ...column,
      taskIds: newTaskIds
    };

    const newData = { ...data };
    const updatedColumn = newData.columns.find(
      column => column.id === newColumn.id
    );
    updatedColumn.taskIds = newTaskIds;

    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {data.columnOrder.map(columnId => {
        const column = data.columns.find(column => column.id === columnId);

        const tasks = column.taskIds.map(taskId =>
          data.tasks.find(task => task.id === taskId)
        );
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
    </DragDropContext>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
