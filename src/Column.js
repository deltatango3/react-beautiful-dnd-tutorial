import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;

const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
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
        {provided => (
          <TaskList ref={provided.innerRef} {...provided.droppableProps}>
            {getTasks()}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    </Container>
  );
};

// class Column extends Component {
//   getTasks = () =>
//     this.props.tasks.map((task, index) => {
//       return <Task key={task.id} task={task} index={index} />;
//     });

//   render() {
//     return (
//       <Container>
//         <Title>{this.props.column.title}</Title>
//         <Droppable droppableId={this.props.column.id}>
//           {provided => (
//             <TaskList ref={provided.innerRef} {...provided.droppableProps}>
//               {this.getTasks()}
//               {provided.placeholder}
//             </TaskList>
//           )}
//         </Droppable>
//       </Container>
//     );
//   }
// }

export default Column;
