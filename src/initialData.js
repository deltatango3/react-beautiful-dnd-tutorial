// const initialData = {
//   tasks: {
//     'task-1': { id: 'task-1', content: 'Take out trash' },
//     'task-2': { id: 'task-2', content: 'Charge phone' },
//     'task-3': { id: 'task-3', content: 'Clean washroom' },
//     'task-4': { id: 'task-4', content: 'Buy groceries' }
//   },
//   columns: {
//     'column-1': {
//       id: 'column-1',
//       title: 'To do',
//       taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
//     }
//   },
//   columnOrder: ['column-1']
// };

const initialData = {
  tasks: [
    { id: 'task-1', content: 'Take out trash' },
    { id: 'task-2', content: 'Charge phone' },
    { id: 'task-3', content: 'Clean washroom' },
    { id: 'task-4', content: 'Buy groceries' },
    { id: 'task-5', content: 'go for run' }
  ],
  columns: [
    {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    {
      id: 'column-2',
      title: 'In Progress',
      taskIds: []
    },
    {
      id: 'column-3',
      title: 'Done',
      taskIds: []
    },
  ],
  columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;
