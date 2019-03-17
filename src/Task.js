import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 10px;
  background-color: ${props => (props.isDragging ? 'dodgerblue' : 'white')};
`;

const Task = props => {
  return (
    <Draggable draggableId={props.task.id} index={props.index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          //pass a prop to the STYLED COMPONENENTS 'Container'
          isDragging={snapshot.isDragging}
        >
          {props.task.content}
        </Container>
      )}
    </Draggable>
  );
};

export default Task;
