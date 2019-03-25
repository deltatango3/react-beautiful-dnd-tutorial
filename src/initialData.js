const initialData = {
  tasks: [
    { id: "task-1", content: "Take out trash" },
    { id: "task-2", content: "Charge phone" },
    { id: "task-3", content: "Clean washroom" },
    { id: "task-4", content: "Buy groceries" }
  ],
  columns: [
    {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3", "task-4"]
    },
    {
      id: "column-2",
      title: "In Progress",
      taskIds: []
    }
  ],
  columnOrder: ["column-1", "column-2"]
};

export default initialData;
