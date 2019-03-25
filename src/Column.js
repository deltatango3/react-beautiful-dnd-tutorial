import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 250px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  /* props.isDraggingOver is passed into styled-component TaskList from the return below */
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

const Column = props => {
  const getTasks = () =>
    props.tasks.map((task, index) => {
      return <Task key={task.id} task={task} index={index} />;
    });

  return (
    <Container>
      <Title>{props.column.title}</Title>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
            {getTasks()}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

export default Column;
