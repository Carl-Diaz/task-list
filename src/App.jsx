import React from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";

const App = () => {
  const tasks = [
    { name: "Task 1", completed: false },
    { name: "Task 2", completed: true },
    { name: "Task 3", completed: false },
  ];

  return (
    <div>
      <Header />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
