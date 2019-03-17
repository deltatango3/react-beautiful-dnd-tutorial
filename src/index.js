import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from './initialData';
import Column from './Column';

const Container = styled.div`
  display: flex;
`

const App = () => {
  const [data, setData] = useState(initialData);

  const getColumn = (columns, location) => {
    return columns.find((column) => {
      return column.id === location;
    })
  }

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

    const start = getColumn(data.columns, source.droppableId)
    const finish = getColumn(data.columns, destination.droppableId)

    if (start === finish) {
      const newTaskIds = [...start.taskIds]
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);
      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }
  
      const newData = { ...data };
      const updatedColumn = newData.columns.find(
        column => column.id === newColumn.id
      );
      updatedColumn.taskIds = newTaskIds;
  
      setData(newData);
    }

    //Moving from one list to another
    //create a new starttaskids array, remove the source.index (splice)
    const startTaskIds = [...start.taskIds]
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start, 
      taskIds: startTaskIds
    }

    const finishTaskIds = [...finish.taskIds]
    finishTaskIds.splice(destination.index, 0 , draggableId)

    const newFinish = {
      ...finish, 
      taskIds: finishTaskIds
    }

    const newData = {...data}
    
    const updatedStartColumn = newData.columns.find((column) => {
      return column.id === newStart.id
    })
    updatedStartColumn.taskIds = newStart.taskIds

    const updatedFinishColumn = newData.columns.find((column) => {
      return column.id === newFinish.id
    })
    updatedFinishColumn.taskIds = newFinish.taskIds

    setData(newData)
    
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
      {data.columnOrder.map(columnId => {
        const column = data.columns.find(column => column.id === columnId);

        const tasks = column.taskIds.map(taskId =>
          data.tasks.find(task => task.id === taskId)
        );
        return <Column key={column.id} column={column} tasks={tasks} />;
      })}
      </Container>
    </DragDropContext>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
